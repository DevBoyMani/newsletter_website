const selectedIds = process.env.SELECTED_WEBSITE_IDS?.split(",").map(
  Number
) ?? [1, 3, 7];

export default selectedIds;
