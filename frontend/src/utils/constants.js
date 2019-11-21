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
  facebook: `//www.facebook.com/${socialMediaHandle}`,
  instagram: `//www.instagram.com/${socialMediaHandle}/`,
};
