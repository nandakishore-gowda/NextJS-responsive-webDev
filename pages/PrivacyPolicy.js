import React from "react";
import { Html } from "next/document";

function PrivacyPolicy() {
  return (
    <div className="bg-black">
      <div className=" mx-auto">
        <div className="flex justify-center items-center pt-10">
          <h1 className=" text-white font-normal text-2xl font-Poppins">
            Privacy Policy
          </h1>
          <div className="border-t-2 border-[#FFE600] w-[200px] md:w-[860px]"></div>
        </div>

        <p className=" p-4 md:p-0 pt-4 md:pt-10 text-white font-Poppins tracking-normal leading-loose pb-10 max-w-4xl mx-auto text-justify">
          <strong>Sandhut India LLP</strong> (“Sandhut”, “we”, “us”, “our”) is
          committed to safeguarding the privacy of our customers, employees and
          any other person whose personal data we may process. This privacy
          policy sets out the basis on which any personal data we collect from
          you, or that you provide to us, will be processed by us.
          <br />
          We will only process personal data in accordance with current data
          protection laws, including the General Data Protection Regulation
          (“GDPR”).
          <br />
          <br />
          <strong>
            {" "}
            We may collect and process the following data about you :
          </strong>{" "}
          <br />
          • Information you provide by filling in forms on our website or by
          contacting us by any other means. This includes information provided
          at the time of registering to use our website, subscribing to our
          services, posting material or requesting further services.
          <br />
          • Details of your visits to our website including, but not limited to,
          traffic data, location data, weblogs and other communication data,
          whether this is required for our own billing purposes or otherwise and
          the resources that you access.
          <br />
          • Information from surveys that we may, from time to time, run on our
          website for research purposes.
          <br />
          • Any information you provide to us when you contact us, or interact
          with us, by any means.
          <br />
          <br />
          <strong>
            We may use information held about you in the following ways :
          </strong>
          <br />
          • To ensure that content from our website is presented in the most
          effective manner for you and for your computer.
          <br />
          • To provide you with information, products or services that you
          request from us or which we feel may interest you, where you have
          consented to be contacted for such purposes.
          <br />
          • To allow you to participate in interactive features of our service,
          when you choose to do so.
          <br />
          • To notify you about changes to our service.
          <br />
          • To ensure that our website and services are secure and of a high
          quality.
          <br />
          We may disclose your personal information to any member of our group,
          which means our subsidiaries, our ultimate holding company and its
          subsidiaries.
          <br />
          <br />
          <strong>
            We may also disclose your personal information to third parties :
          </strong>
          <br />
          • In the event that we sell or buy any business or assets, in which
          case we may disclose your personal data to the prospective seller or
          buyer of such business or assets.
          <br />
          • If Sandhut or substantially all of its assets are acquired by a
          third party, in which case personal data held by it about its
          customers will be one of the transferred assets.
          <br />
          • If we are under a duty to disclose or share your personal data in
          order to comply with any legal obligation, or in order to enforce or
          apply our terms of use and other agreements; or to protect the rights,
          property, or safety of Sandhut, our customers, or others.
          <br />
          <br />
          We will take all steps reasonably necessary to ensure that your data
          is treated securely and in accordance with this privacy policy. All
          information you provide to us is stored on secure servers. Any payment
          transactions will be encrypted. Where we have given you (or where you
          have chosen) a password which enables you to access certain parts of
          our website, you are responsible for keeping this password
          confidential. We ask you not to share a password with anyone.
          Unfortunately, the transmission of information via the internet is not
          completely secure. Although we will do our best to protect your
          personal data, we cannot guarantee the security of your data
          transmitted to our website; any transmission is at your own risk. Once
          we have received your information, we will use strict procedures and
          security features to try to prevent unauthorised access.
          <br />
          <br />
          <strong>Your rights</strong>
          <br />
          You have the right to ask us not to process your personal data for
          marketing purposes. We will usually inform you (before collecting your
          data) if we intend to use your data for such purposes or if we intend
          to disclose your information to any third party for such purposes. You
          can exercise your right to prevent such processing by checking certain
          boxes on the forms we use to collect your data. You can also exercise
          the right at any time by contacting us at{" "}
          <strong>info@sandhut.in</strong>
          Our website may, from time to time, contain links to and from the
          websites of our partner networks, advertisers and affiliates. If you
          follow a link to any of these websites, please note that these
          websites have their own privacy policies and that we do not accept any
          responsibility or liability for these policies. Please check these
          policies before you submit any personal data to these websites.
          <br />
          <br />
          <strong>Access to information</strong>
          <br />
          You have the right to access information held about you. Your right of
          access can be exercised in accordance with the GDPR. Any access
          request may be subject to a fee of ₹1000 to meet our costs in
          providing you with details of the information we hold about you.
          <br />
          <br />
          <strong>Changes to our privacy policy</strong>
          <br />
          Any changes we may make to our privacy policy in the future will be
          posted on this page and, where appropriate, notified to you by e-mail.
          <br />
          <br />
          <strong>Contact</strong>
          <br />
          Questions, comments and requests regarding this privacy policy are
          welcomed and should be addressed to <strong>info@sandhut.in</strong>
        </p>
      </div>
      {/* mobile view */}
    </div>
  );
}

export default PrivacyPolicy;
