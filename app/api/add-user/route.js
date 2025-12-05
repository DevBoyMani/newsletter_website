import { query } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      email,
      websiteIds, // can be array or CSV string

      // Optional user metadata
      browser = null,
      device = null,
      platform = null,
      referrer = null,
      zbStatus = null,
      zbSubStatus = null,
      city = null,
      country = null,
      domain = null,
      firstname = null,
      lastname = null,
      gender = null,
      zipcode = null,
      region = null,
      smtp_provider = null,
      ip = null,
    } = body || {};

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // Normalize websiteIds → array of numbers
    let normalizedWebsiteIds = [];

    if (Array.isArray(websiteIds)) {
      normalizedWebsiteIds = websiteIds
        .map((v) => Number(v))
        .filter((n) => !isNaN(n));
    } else if (typeof websiteIds === "string") {
      normalizedWebsiteIds = websiteIds
        .split(",")
        .map((v) => Number(v.trim()))
        .filter((n) => !isNaN(n));
    }

    // Default fallback if nothing passed
    if (normalizedWebsiteIds.length === 0) normalizedWebsiteIds = [1];

    const normalizedEmail = String(email).toLowerCase().trim();
    const SOURCE_ID = 3;

    // Begin transaction
    await query("BEGIN");

    //
    // 1️⃣ CHECK IF USER EXISTS
    //
    const findUserSql = `SELECT id, uniqueid FROM users WHERE email = $1`;
    const existingUserRes = await query(findUserSql, [normalizedEmail]);

    let userId;
    let uniqueId;

    if (existingUserRes.rows.length > 0) {
      // UPDATE EXISTING USER
      userId = existingUserRes.rows[0].id;
      uniqueId = existingUserRes.rows[0].uniqueid;

      const updateUserSql = `
        UPDATE users
        SET
          browser        = $1,
          device         = $2,
          platform       = $3,
          country        = $4,
          updated_at     = NOW(),
          referrer       = $5,
          source_id      = $6,
          zbstatus       = $7,
          zbsubstatus    = $8,
          city           = $9,
          domain         = $10,
          firstname      = $11,
          lastname       = $12,
          gender         = $13,
          zipcode        = $14,
          region         = $15,
          smtp_provider  = $16,
          ip             = $17
        WHERE id = $18;
      `;

      await query(updateUserSql, [
        browser,
        device,
        platform,
        country,
        referrer,
        SOURCE_ID,
        zbStatus,
        zbSubStatus,
        city,
        domain,
        firstname,
        lastname,
        gender,
        zipcode,
        region,
        smtp_provider,
        ip,
        userId,
      ]);
    } else {
      // INSERT NEW USER
      const insertUserSql = `
        INSERT INTO users (
          email,
          source_id,
          browser,
          device,
          platform,
          country,
          created_at,
          updated_at,
          referrer,
          zbstatus,
          zbsubstatus,
          city,
          domain,
          firstname,
          lastname,
          gender,
          zipcode,
          region,
          smtp_provider,
          ip
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, NOW(), NOW(),
          $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18
        )
        RETURNING id, uniqueid;
      `;

      const insertRes = await query(insertUserSql, [
        normalizedEmail,
        SOURCE_ID,
        browser,
        device,
        platform,
        country,
        referrer,
        zbStatus,
        zbSubStatus,
        city,
        domain,
        firstname,
        lastname,
        gender,
        zipcode,
        region,
        smtp_provider,
        ip,
      ]);

      userId = insertRes.rows[0].id;
      uniqueId = insertRes.rows[0].uniqueid;
    }

    //
    // 2️⃣ SUBSCRIBE USER TO EACH WEBSITE
    //
    const findSubSql = `
      SELECT status
      FROM subscribers
      WHERE user_id = $1 AND website_id = $2
      LIMIT 1;
    `;

    const updateSubSql = `
      UPDATE subscribers
      SET status = 'subscribed',
          updated_at = NOW()
      WHERE user_id = $1 AND website_id = $2;
    `;

    const insertSubSql = `
      INSERT INTO subscribers (user_id, website_id, status, created_at, updated_at)
      VALUES ($1, $2, 'subscribed', NOW(), NOW());
    `;

    for (const websiteId of normalizedWebsiteIds) {
      const subRes = await query(findSubSql, [userId, websiteId]);

      if (subRes.rows.length > 0) {
        await query(updateSubSql, [userId, websiteId]);
      } else {
        await query(insertSubSql, [userId, websiteId]);
      }
    }

    //
    // 3️⃣ COMMIT TRANSACTION
    //
    await query("COMMIT");

    return new Response(
      JSON.stringify({
        success: true,
        userId,
        uniqueId,
        websiteIds: normalizedWebsiteIds,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("API ERROR:", error);

    try {
      await query("ROLLBACK");
    } catch (e) {
      console.error("ROLLBACK ERROR:", e);
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Internal server error",
      }),
      { status: 500 }
    );
  }
}
