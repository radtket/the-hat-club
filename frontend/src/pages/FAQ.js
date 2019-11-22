import React from "react";
import { PageTitleStacked, FaqItem } from "../components";

const FAQ = () => {
  return (
    <>
      <PageTitleStacked label="FAQ" title="Frequently Asked Questions" />
      <div className="container">
        <FaqItem title="How do I track my order?">
          <p>
            You will receive an email confirmation shortly after you place an
            order. You will also be able to log into your account on our website
            to view any of your current or previous orders.
          </p>

          <p>
            The only "tracking" you will be able to use is through our shipping
            carriers' websites. Once your order is shipped, you will receive an
            email from either FedEx or USPS with your package's tracking number.
            If you need further help in tracking details of your order, please
            call us toll free at 888-428-6322 or email us at
            customerservice@hatclub.com.
          </p>
        </FaqItem>

        <FaqItem title="How long will it take to receive my order after placing it?">
          <p>
            Most orders placed before 10am PST, Mon-Fri ship within 48 hours.
            Once an order has been shipped, please allow 2-10 business days for
            your order to arrive, depending on your choice of shipping method.
            You will receive an email confirming your tracking number the day
            your order ships.
          </p>

          <p>
            If you ordered multiple items, your order may ship in separate
            packages and you will receive a separate shipping email for each
            package. You will not be charged any additional shipping fees.
          </p>
        </FaqItem>
        <FaqItem title="How is sales tax calculated?">
          We must charge sales tax in accordance with state and local laws and
          regulations to all orders shipped to Arizona, California, Texas,
          Washington & New York. We charge an Arizona tax rate of 8.1%,
          California of 8.75%, Texas 8.25%, Washington 10.00% and New York 8.5%.
          Sales tax is added during checkout on the items in your cart. There is
          no sales tax on shipping.
        </FaqItem>
        <FaqItem title="When is my credit card charged?">
          You credit card is not charged until your order is shipped. Your card
          will be “authorized” at the time you place your order. This verifies
          the available funds on your credit card and the amount is “held” until
          we process your order for shipment. Your bank account or credit card
          statement may show a pending transaction for your order amount until
          we have shipped your order.
        </FaqItem>
        <FaqItem title="What if my shipping and billing addresses are different?">
          Not a problem. However, orders greater than $100 may need to be
          shipped to your credit card's billing address for your safety. We will
          contact you if your order needs to be shipped to your billing address
          if it's different than your shipping address.
        </FaqItem>
        <FaqItem title="How much does shipping cost?">
          <table border="1">
            <thead>
              <tr>
                <th>
                  <div align="center">
                    <span>
                      <strong>Shipping To</strong>
                    </span>
                  </div>
                </th>
                <th>
                  <div align="center">
                    <span>
                      <strong>Sale Amount</strong>
                    </span>
                  </div>
                </th>
                <th>
                  <div align="center">
                    <span>
                      <strong>Shipping Cost</strong>
                      <strong>s &amp; Times </strong>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <span>
                      <strong>ALL 50 U.S. STATES</strong>
                      <br />
                    </span>
                  </p>
                </td>
                <td align="center" valign="middle">
                  <p align="center">
                    <span>All orders**</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>Standard (2-5 transit days*) - $4.99</span>
                  </p>
                  <p>
                    <span>Priority (2-3 transit days*) - $8.99</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>
                      <strong>APO, FPO, &amp; OTHER MILITARY</strong> - select
                      'United States' as your country
                      <br />
                    </span>
                  </p>
                </td>
                <td>
                  <p align="center">
                    <span>All orders**</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>$4.99 (5-10 transit days*)</span>
                  </p>
                </td>
              </tr>
              <tr align="left" valign="middle">
                <td>
                  <p>
                    <span>
                      <strong>AUSTRALIA^</strong> - Australian Post
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <strong>CHINA^</strong> - China Post
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <strong>FRANCE^</strong> - la Poste
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <span>
                          <strong>GERMANY^</strong> - Deutsche Post
                        </span>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <strong>ITALY^</strong> - Poste Italiane
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <span>
                          <strong>JAPAN^</strong> - Japan Post
                        </span>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <span>
                          <strong>NETHERLANDS^</strong> - TNT Post
                        </span>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <strong>SWEDEN^</strong> - Post
                      </span>
                      en
                    </span>
                  </p>
                  <p>
                    <span>
                      <strong>SPAIN</strong>
                      <span>
                        <strong>^</strong> - Correos
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      <span>
                        <span>
                          <strong>UNITED KINGDOM^</strong> - Royal Post
                        </span>
                      </span>
                    </span>
                  </p>
                </td>
                <td>
                  <div align="center">
                    <span>1-2 Hats/Items**</span>
                  </div>
                  <div align="center">
                    <span>
                      <span>3-4 Hats/Items**</span>
                    </span>
                    <div align="center">
                      <span>5-8 Hats/Items**</span>
                    </div>
                  </div>
                  <div align="center">
                    <span>
                      <span>9-12 Hats/Items**</span>
                    </span>
                  </div>
                  <div align="center">
                    <span>
                      <span>
                        <span>13+ Hats/Items**</span>
                      </span>
                      <br />
                    </span>
                  </div>
                </td>
                <td>
                  <div align="center">
                    <span>
                      $14.99 (7-14 transit days*), $44.99 FedEx Priority (3-7
                      transit days*)
                      <br />
                    </span>
                  </div>
                  <span>
                    <span>
                      $19.99 (7-14 transit days*),{" "}
                      <span>$44.99 FedEx Priority (3-7 transit days*)</span>
                      <br />
                    </span>
                  </span>
                  <div align="center">
                    <span>
                      $24.99 (7-14 transit days*)
                      <span>
                        <span>
                          ,{" "}
                          <span>$54.99 FedEx Priority (3-7 transit days*)</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <span>
                    <span>
                      <span>
                        $34.99 (7-14 transit days*)
                        <span>
                          <span>
                            ,{" "}
                            <span>
                              $54.99 FedEx Priority (3-7 transit days*)
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <div align="center">
                    <span>
                      $59.99 (7-14 transit days*)
                      <span>
                        <span>
                          ,{" "}
                          <span>$99.99 FedEx Priority (3-7 transit days*)</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr align="left" valign="middle">
                <td>
                  <p>
                    <span>
                      <strong>CANADA^</strong> - ships Canadian Post
                      <br />
                    </span>
                  </p>
                </td>
                <td>
                  <div align="center">
                    <span>1-2 Hats/Items**</span>
                  </div>
                  <div align="center">
                    <span>
                      <span>3-4 Hats/Items**</span>
                    </span>
                    <div align="center">
                      <span>5-8 Hats/Items**</span>
                    </div>
                  </div>
                  <div align="center">
                    <span>
                      <span>9-12 Hats/Items**</span>
                    </span>
                  </div>
                  <div align="center">
                    <span>
                      <span>
                        <span>13+ Hats/Items**</span>
                      </span>
                      <br />
                    </span>
                  </div>
                </td>
                <td>
                  <div align="center">
                    <span>
                      $9.99 (7-14 transit days*)
                      <br />
                    </span>
                  </div>
                  <span>
                    <span>$14.99 (7-14 transit days*)</span>
                  </span>
                  <div align="center">
                    <span>$19.99 (7-14 transit days*)</span>
                  </div>
                  <span>
                    <span>
                      <span>$24.99 (7-14 transit days*)</span>
                    </span>
                  </span>
                  <div align="center">
                    <span>
                      $39.99 (7-14 transit days*)
                      <br />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span>
                      <strong>All Other International Addresses^</strong>
                    </span>
                  </p>
                </td>
                <td>
                  <div align="center">
                    <div align="center">
                      <span>1-4 Hats/Items**</span>
                    </div>
                    <div align="center">
                      <span>
                        <span>5-12 Hats/Items**</span>
                      </span>
                      <div align="center">
                        <span>13+ Hats/Items**</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div align="center">
                    <span>
                      <span>
                        <span>
                          <span>$44.99 FedEx Priority (3-7 transit days*)</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  $54.99 FedEx Priority (3-7 transit days*)
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <div align="center">
                    <span>
                      <span>
                        <span>
                          <span>$99.99 FedEx Priority (3-7 transit days*)</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            *Shipping time estimates are "business" transit days and do not
            include order processing time. Due to reasons outside of Hat Club's
            control, i.e. inclement weather, acts of God, delivery service
            strikes, etc., we must allow up to 10 business days from the
            ship-date for U.S. orders to arrive before declaring that they are
            "lost in transit" and can be reshipped. APO/FPO/Military orders must
            allow up to 15 business days for the same reasons listed above. All
            international orders must allow at least 30 days from the ship-date
            for the same reasons listed above. These delays are NOT normal and
            are listed as a precaution. Please contact us if you have questions
            about urgent delivery times and if you would like to verify arrival
            times.
          </p>

          <p>
            **Orders over $100 U.S. may be required to ship to the billing
            address listed with the credit card, or to have a Verified PayPal
            account.
          </p>

          <p>
            ^International orders which contain many items, or which contain
            large headwear accessories, may require additional shipping charges.
            We will attempt to contact you if additional funds are needed.
            International orders may also be subject to duties & taxes required
            by their country. These duties and taxes can usually be estimated at
            15-20% and must be paid to the shipping carrier upon delivery. All
            international orders must be shipped to the credit card billing
            address, unless paying by PayPal.
          </p>
        </FaqItem>
        <FaqItem title="How do I change or cancel an order?">
          <p>
            If you wish to make a change to, or cancel your order, please call
            us at 888-428-6322 or email us as soon as possible. We will do
            everything we can to accommodate your request but cannot guarantee
            that your request will be honored due to real time order processing.
            If your order has already been shipped, we will not be able to
            change or cancel the order.
          </p>

          <p>
            If your ordered cannot be changed or canceled, you may either refuse
            delivery of shipment or ship the order back to us. You will need to
            pay for the return shipping and we suggest insuring the products for
            their retail value. Hat Club is not responsible for returned product
            in transit. We will not refund shipping for these orders since the
            order was already shipped.
          </p>
        </FaqItem>
        <FaqItem title="What is Hat Club’s Return / Exchange policy?">
          <p>
            If you are unsure about your purchase, please do not wear the
            item(s). We will gladly issue a refund within 45 days of your
            purchase date, or from when your order was delivered, whichever is
            longer. Exchanges will be accepted up to 60 days after the purchase
            date. All items must be unworn, unwashed, and in new condition.
            Reminder there is a $4.99 return shipping fee, withdrawn from your
            return amount. Please see our Return Policy page for more details.
          </p>
        </FaqItem>
        <FaqItem title="Is this web site secure and is my credit card information safe?">
          <p>
            We work with some of the best security measures available on the
            Internet. We want you to feel comfortable that personal information
            such as your name, address and credit card number will be kept safe
            throughout your entire shopping experience.
          </p>

          <p>
            For added safety we do not store credit card information on our web
            server after your order has been processed. Even after you register
            with our site, you have to enter your credit card information each
            time you make a purchase. This significantly reduces the chances of
            Internet credit card fraud. We use Authorize.net's secure site as
            our credit card processor. Please visit www.Authorize.net for more
            information on their high measures of internet security.
          </p>

          <p>
            Our site is designed to only accept orders from Web browsers that
            permit communication through Secure Socket Layer (SSL) technology;
            for example, 3.0 versions or higher of Netscape Navigator and
            versions 3.02 or higher of Internet Explorer. This means you'll be
            unable to place an order through an unsecured connection.
          </p>

          <p>
            We also use McAfee Secure to test our website daily to protect us
            from identity theft, phishing, viruses, and spyware. Check out our
            rating for yourself at McAfee.
          </p>
        </FaqItem>
        <FaqItem title="How do you protect my privacy?">
          <p>
            Our relationship with our customers is very important. HatClub.com
            is committed to providing our customers with a secure web site to
            shop and will only collect the personal information that is
            necessary to process your order. Our customers should feel assured
            that access to this information will be limited to the appropriate
            employees and will never be sold or given to any other company.
            Please read the following information to learn more about how and
            why we collect information and how the information is safeguarded.
            If you have any questions concerning our privacy policy, please
            contact us.
          </p>

          <p>
            What information does HatClub.com need when a customer places an
            order? When a customer places an order over our web site, we will
            ask for your payment method preference, credit card account number,
            expiration date, and card security code (if applicable), name as it
            appears on your credit card, "bill to" address, shipping address,
            daytime phone number, and e-mail address. You will have the option
            of saving this information for future purchases. The information is
            stored in the form of a "cookie" in your computer. Cookies are text
            files that are stored on your computer. Your browser should give you
            the option to refuse cookies. You cannot make purchases on
            HatClub.com without your cookies enabled.
          </p>

          <p>
            Our customers should feel confident that the above personal
            information is transmitted over secure servers. This information is
            necessary to properly process your order. Our systems limit access
            to this information only to employees who may need it to process
            your order. To complete a credit card transaction, the pertinent
            credit card information is securely forwarded to our credit card
            processor for authorization. HatClub.com guarantees that our
            customers will only pay for those items, which they have actually
            authorized.
          </p>

          <p>
            HatClub.com collaborates with government agencies and other
            companies to prevent fraud. In the collaboration process, we may
            share information with these agencies and companies assisting us in
            the fraud prevention and investigation, as permitted and required by
            law. In no way is this information used for marketing purposes. This
            information is strictly used to prevent and assist fraud
            investigations.
          </p>
        </FaqItem>
        <FaqItem title="Can you embroider logos or text on hats?">
          <p>
            Unfortunately, we do not offer embroidery services at this time and
            are unable to create custom designed logo hats. We only supply
            licensed, branded, or blank style headwear.
          </p>
        </FaqItem>
        <FaqItem title="How can I buy team or bulk orders?">
          <p>
            Unfortunately we do not offer team or bulk orders. We also do not
            offer embroidery services at this time and are unable to create
            custom designed logoed hats. We only supply in-stock licensed,
            branded, or blank style headwear.
          </p>
        </FaqItem>
        {/* <FaqItem title="">

      </FaqItem> */}
        {/* <FaqItem title="">

      </FaqItem> */}
      </div>
    </>
  );
};

export default FAQ;
