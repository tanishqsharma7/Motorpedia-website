import { PiCheckCircle } from "react-icons/pi";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/privacy.svg";
function PrivacyPolicy() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Privacy Policy"
        pageDesc="We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
        pageTitle="Privacy Policy"
      />

      <section className="container stp-30 sbp-30 flex flex-col gap-2">
        <div className=" flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 text-white rounded-full">
            Privacy Policy
          </p>
          <h2 className="display-4 py-6">Privacy Policy</h2>
          <p className=" text-bodyText">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>

        <div className="">
          <h3 className="heading-1 py-6">Information we collect</h3>
          <p className=" text-bodyText">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              Email address
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              First name and last name
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              Phone number Address, State, Province, ZIP/Postal code, City
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-2 py-6">Use of information</h3>
          <p className=" text-bodyText">
            Usage Data is collected automatically when using the Service. Usage
            Data may include information such as Your Device's Internet Protocol
            address (e.g. IP address), browser type, browser version, the pages
            of our Service that You visit, the time and date of Your visit, the
            time spent on those pages, unique device identifiers and other
            diagnostic data. When You access the Service by or through a mobile
            device, We may collect certain information automatically, including,
            but not limited to, the type of mobile device You use, Your mobile
            device unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data. We may also
            collect information that Your browser sends whenever You visit our
            Service or when You access the Service by or through a mobile
            device.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Use of Personal Data</h3>
          <p className=" text-bodyText">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To provide and maintain our Service
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To manage Your Account
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For the performance of a contract
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To contact You
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              To manage Your requests
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For business transfer.
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data Sharing and Third Part</h3>
          <p className=" text-bodyText">
            We may share Your personal information in the following situations:
          </p>
          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              With Service Providers
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For business transfers
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              With Affiliate
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              With business partners
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              With Your consent
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data retention</h3>
          <p className=" text-bodyText">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies. The Company will also
            retain Usage Data for internal analysis purposes. Usage Data is
            generally retained for a shorter period of time, except when this
            data is used to strengthen the security or to improve the
            functionality of Our Service, or We are legally obligated to retain
            this data for longer time periods.
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              We believe in minimizing data storage while ensuring compliance
              with regulations
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For specific details on our data retention practices
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              please refer to our comprehensive Privacy Policy. Your trust is
              paramount
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Cookies and tracking technologies</h3>
          <p className=" text-bodyText">
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
            remain on Your personal computer or mobile device when You go
            offline, while Session Cookies are deleted as soon as You close Your
            web browser.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Children's privacy</h3>
          <p className=" text-bodyText">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Changes to the privacy policy</h3>
          <p className=" text-bodyText">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy. You are advised to
            review this Privacy Policy periodically for any changes. Changes to
            this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Contact information</h3>
          <p className=" text-bodyText">
            If you have any questions or concerns regarding our Privacy Policy
            or the handling of your personal information, please contact us at :
            <span className="text-p1"> motorpedia@gmail.com</span>
          </p>
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default PrivacyPolicy;
