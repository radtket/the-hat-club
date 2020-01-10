import React from "react";
import { Box, Flex } from "@rebass/grid";
import { PageSection, PageTitleStacked } from "../components";
import ContactForm from "../components/Contact/ContactForm";
import {
  StyledContactForm,
  StyledContactFormSection,
} from "../styles/ContactForm";
import ContactSidebar from "../components/Contact/ContactSidebar";

const Contact = () => {
  return (
    <>
      <PageSection className="bg-black">
        <div className="container">
          <Flex alignItems="center" justifyContent="center">
            <PageTitleStacked title="Contact." />
          </Flex>
        </div>
      </PageSection>
      <StyledContactFormSection>
        <div className="container">
          <StyledContactForm>
            <Box className="fancy-title" px={3}>
              <h2>Drop us a line</h2>
              <p>We are here to answer any question you may have</p>
            </Box>
            <Flex>
              <Box px={3} width={2 / 3}>
                <ContactForm />
              </Box>
              <Box px={3} width={1 / 3}>
                <ContactSidebar />
              </Box>
            </Flex>
          </StyledContactForm>
        </div>
      </StyledContactFormSection>
    </>
  );
};

export default Contact;
