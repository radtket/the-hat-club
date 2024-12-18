import stripePackage from "stripe";

export const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

export const hasPermission = (user, permissionsNeeded) => {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );

  if (isArrayEmpty(matchedPermissions)) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
};

export const calcTotalPrice = cart => {
  return cart.reduce((tally, { item, quantity }) => {
    if (!item) {
      return tally;
    }
    return tally + quantity * item.price;
  }, 0);
};

export const isLoggedIn = req => {
  if (!req.userId) {
    throw new Error("You must be logged in to do that");
  }
};
