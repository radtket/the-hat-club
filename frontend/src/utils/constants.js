export const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE",
];

// Pagination
export const perPage = parseInt(process.env.REACT_APP_PAGINATION_PER_PAGE, 10);

export const socialMediaHandle = "hatclub";

export const socialMediaUrls = {
  twitter: `//twitter.com/${socialMediaHandle}`,
  facebook: `//facebook.com/${socialMediaHandle}`,
  instagram: `//instagram.com/${socialMediaHandle}/`,
};
