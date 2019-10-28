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

exports.hasPermission = hasPermission;
exports.isArrayEmpty = isArrayEmpty;
