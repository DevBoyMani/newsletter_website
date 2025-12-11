const selectedIds =
  process.env.NEXT_PUBLIC_SELECTED_WEBSITE_IDS?.split(",").map(Number) || [];

export default selectedIds;
