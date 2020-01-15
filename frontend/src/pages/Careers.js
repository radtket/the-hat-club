import React from "react";
import BigTitle from "../components/BigTitle";
import { SmallSection } from "../styles/General";

const Careers = () => {
  return (
    <>
      <BigTitle accent="Careers" title="Job Opportunities" />
      <SmallSection>
        <div className="container">
          <p>
            Hat Club, LLC is a leading growth-oriented retailer that offers
            opportunities to employees who produce results. Our philosophy is to
            attract seasoned employees, promote from within, and reward strong
            performance.
          </p>
          <p>
            Our New Era 59Fifty hats, Snapbacks, and branded caps are the most
            popular headwear available, and we take pride in the originality and
            quality of our caps and other merchandise. Our stores and employees
            reflect that pride with their dedication to delivering quality
            customer service.
          </p>

          <p>
            We are continuously searching for highly talented, committed
            individuals to execute our company strategy; people who are
            energetic, responsible, and customer service oriented.
          </p>

          <p>
            It is Hat Club’s policy and practice to ensure equal employment
            opportunity to all job applicants and its employees. We are
            committed to providing our employees with a work environment free
            from discrimination and harassment.
          </p>
        </div>
      </SmallSection>
    </>
  );
};

export default Careers;
