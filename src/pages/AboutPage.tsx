import AboutSection from "../components/aboutpage/AboutSection";

import OurValues from "../components/aboutpage/OurValues";
import StorySection from "../components/aboutpage/StorySection";
import CTASectiont from "../components/homepage/CTASectiont";
import ContactSection from "../components/homepage/ContactSection";

function AboutPage() {
  return (
    <main>
      <AboutSection />
      <StorySection />
      <OurValues />
      {/* <AwardsSection /> */}
      {/* <CounterSection /> */}
      {/* <WhyAccoupay /> */}
      {/* <Testimonial />
      <PricingSection /> */}
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default AboutPage;
