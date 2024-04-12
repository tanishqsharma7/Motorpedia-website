import CTASectiont from "../components/homepage/CTASectiont";
import HealthCareSection from "../components/services/HealthCareSection";
import ManageHealthSection from "../components/services/ManageHealthSection";
import SearvicesFeaturesSection from "../components/services/SearvicesFeaturesSection";
import TaxationSection from "../components/services/TaxationSection";
import TaxationVideoSection from "../components/services/TaxationVideoSection";
import WhatWeDoTaxation from "../components/services/WhatWeDoTaxation";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumbImg from "/images/sale3.webp";
function saleEnablement() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumbImg}
        middlePage="Services"
        pageName="Sale Enablement Services"
        pageDesc="At MotorPedia, we offer personalized consultations, transparent pricing, and educational resources to empower you. With a convenient booking process and quality assurance, trust us to keep your car running smoothly. Experience the difference today"
        pageTitle="Sale Enablement Services"
      />
      <TaxationSection />
      <WhatWeDoTaxation />
      <HealthCareSection />
      <TaxationVideoSection />
      <ManageHealthSection />
      <SearvicesFeaturesSection />

      <CTASectiont />
    </main>
  );
}

export default saleEnablement;
