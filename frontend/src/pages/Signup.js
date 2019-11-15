import React from "react";
import {
  SignIn,
  SignUp,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  SmallSection,
} from "../components";

const Signup = () => {
  return (
    <SmallSection
      className="container"
      style={{
        maxWidth: 670,
      }}
    >
      <Tabs initialValue="tab-login">
        <TabList
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <Tab name="tab-login">Login</Tab>
          <Tab name="tab-register">Register</Tab>
        </TabList>

        <TabPanel name="tab-login">
          <SignIn />
        </TabPanel>
        <TabPanel name="tab-register">
          <SignUp />
        </TabPanel>
      </Tabs>
    </SmallSection>
  );
};

export default Signup;
