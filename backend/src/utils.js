const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

const hasPermission = (user, permissionsNeeded) => {
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

const calcTotalPrice = cart => {
  return cart.reduce((tally, { item, quantity }) => {
    if (!item) {
      return tally;
    }
    return tally + quantity * item.price;
  }, 0);
};

exports.hasPermission = hasPermission;
exports.isArrayEmpty = isArrayEmpty;
exports.calcTotalPrice = calcTotalPrice;
exports.stripe = stripe;
