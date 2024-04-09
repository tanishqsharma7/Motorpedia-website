import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";
// import CounterSection from "../components/homepage/CounterSection";
// import StepByStepGuide from "../components/homepage/StepByStepGuide";
// import WhyAccoupay from "../components/homepage/WhyAccoupay";
import DedicatedSupport from "../components/services/DedicatedSupport";
import DentistSection from "../components/services/DentistSection";
import WeHelpSection from "../components/services/WeHelpSection";
import WhatWeDo from "../components/services/WhatWeDo";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/laptopS1.png";

function PayrollProcessing() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="DigitalizePro Services"
        pageDesc="Unlock the power of digital transformation with DigitalizePro Services. Elevate your online presence and streamline operations for maximum efficiency"
        pageTitle="DigitalizePro Services"
      />
      <WeHelpSection />
      <WhatWeDo />
      {/* <StepByStepGuide /> */}
      <DentistSection />
      <DedicatedSupport />
      {/* <CounterSection />
      <WhyAccoupay /> */}
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default PayrollProcessing;
