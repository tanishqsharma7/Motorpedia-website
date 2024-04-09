import CTASectiont from "../components/homepage/CTASectiont";
import FaqSection from "../components/homepage/FaqSection";
//import StepByStepGuide from "../components/homepage/StepByStepGuide";
import AccountSection from "../components/services/AccountSection";
import AccountingServicesSection from "../components/services/AccountingServices";
import ManageHealthSection from "../components/services/ManageHealthSection";
import NerverWorrySection from "../components/services/NerverWorrySection";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/RTO-Services.png";

function AccountingServices() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="RTO Services"
        pageDesc="With Motorpedia, you dont have to worry about anything in RTO, just be with us and relax. We cover all the aspect of yourMotor expediture from New Vehicle Registration, Ownership Transfer, fancy numbers, HSPR Booking and many more."
        pageTitle="RTO Services"
      />
      <AccountingServicesSection />
      <NerverWorrySection />

      {/* <StepByStepGuide /> */}
      <AccountSection />
      <ManageHealthSection />
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default AccountingServices;
