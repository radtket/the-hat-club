import React from "react";
import { Box } from "@rebass/grid";
import { useQuery } from "react-apollo";
import {
  ErrorMessage,
  Loading,
  Logout,
  PageTitleStacked,
  SmallSection,
  Tab,
  TabList,
  Tabs,
} from "../../components";

// Subpages
import AccountDetails from "./sub-pages/AccountDetails";
import Addresses from "./sub-pages/Addresses";
import Orders from "./sub-pages/Orders";
import Selling from "./sub-pages/Selling";
import WishList from "./sub-pages/WishList";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import { StyledAboutTabContent } from "../../styles/Pages";

const Account = () => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { me } = data;

  return (
    <>
      <PageTitleStacked title="My Account" />
      <SmallSection className="container">
        <Tabs
          initialValue="tab-account-details"
          style={{
            display: "flex",
          }}
        >
          <Box
            alignItems="flex-start"
            component={TabList}
            display="flex"
            flexDirection="column"
            width={1 / 3}
          >
            <Tab name="tab-orders">Orders</Tab>
            <Tab name="tab-wishlist">Wish List</Tab>
            <Tab name="tab-addresses">Addresses</Tab>
            <Tab name="tab-account-details">Account Details</Tab>
            <Tab name="tab-selling">Selling</Tab>
            <Logout
              style={{
                margin: 0,
                padding: 0,
                fontSize: "18px",
              }}
            />
          </Box>
          <StyledAboutTabContent name="tab-orders">
            <Orders />
          </StyledAboutTabContent>
          <StyledAboutTabContent name="tab-wishlist">
            <WishList {...me} />
          </StyledAboutTabContent>
          <StyledAboutTabContent name="tab-addresses">
            <Addresses />
          </StyledAboutTabContent>
          <StyledAboutTabContent name="tab-account-details">
            <AccountDetails {...me} />
          </StyledAboutTabContent>
          <StyledAboutTabContent name="tab-selling">
            <Selling />
          </StyledAboutTabContent>
        </Tabs>
      </SmallSection>
    </>
  );
};

export default Account;
