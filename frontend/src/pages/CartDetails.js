import React from "react";
import { Flex } from "@rebass/grid";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import {
  Button,
  CartTable,
  PageSection,
  PageTitleStacked,
  ErrorMessage,
} from "../components";

const CartDetails = () => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { me } = data;

  return (
    <PageSection>
      <div className="container">
        <Flex alignItems="center" justifyContent="center">
          <PageTitleStacked title="Cart." />
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <CartTable {...me} />
        </Flex>

        <Flex justifyContent="space-between">
          <Button size="lg" type="button">
            Back To Shop
          </Button>
          <Button size="lg" type="button">
            Update Cart
          </Button>
        </Flex>
      </div>
    </PageSection>
  );
};

export default CartDetails;
