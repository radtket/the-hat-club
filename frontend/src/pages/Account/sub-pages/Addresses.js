import React from "react";
import { Flex, Box } from "@rebass/grid";
import { Link } from "react-router-dom";
import Address from "../../../components/Address";

const Addresses = () => {
  return (
    <>
      <h2
        style={{
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        Addresses
      </h2>
      <p
        style={{
          marginTop: 0,
        }}
      >
        The following addresses will be used on the checkout page by default.
      </p>
      <Flex>
        <Box width={1 / 2}>
          <h3
            style={{
              marginTop: 0,
              marginBottom: 6,
            }}
          >
            Billing Address
          </h3>
          <Address
            city="Arlington"
            name="Jon Doe"
            state="VA"
            street="555 S. Main St."
            zip="22206"
          />
          <Link className="edit" to="/edit-address/billing/">
            Edit
          </Link>
        </Box>
        <Box width={1 / 2}>
          <h3
            style={{
              marginTop: 0,
              marginBottom: 6,
            }}
          >
            Shipping Address
          </h3>
          <Address
            city="Arlington"
            name="Jon Doe"
            state="VA"
            street="555 S. Main St."
            zip="22206"
          />
          <Link className="edit" to="/edit-address/billing/">
            Edit
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Addresses;
