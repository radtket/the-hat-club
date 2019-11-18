import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AccountIcon } from "./Icons";

const AccountButton = ({ me }) => {
  if (!me) {
    return <Link to="/signup">Sign In</Link>;
  }

  return (
    <Link to="/account">
      <AccountIcon />
    </Link>
  );
};

AccountButton.propTypes = {
  me: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    email: PropTypes.string,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        quantity: PropTypes.number,
        item: PropTypes.shape({
          description: PropTypes.string,
          id: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
          title: PropTypes.string,
        }),
      })
    ),
  }),
};

AccountButton.defaultProps = {
  me: null,
};

export default AccountButton;
