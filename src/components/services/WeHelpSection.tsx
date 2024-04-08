import { PiCheckCircleFill } from "react-icons/pi";
import FadeRight from "../animation/FadeRight";
import StaggerEffect from "../animation/StaggerEffectOne";
import img from "/images/we_help.png";

const offeringsItems = [
  "Immersive Virtual Showroom",
  "Interactive Experience",
  "Personalized Recommendations",
  "Seamless Booking",
  "Expert Assistance",
];
function WeHelpSection() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">Digital Showroom</h1>
          <p className=" text-bodyText pt-4 pb-6 lg:pb-8">
            Experience automotive excellence redefined at Digital Showroom. Our
            immersive digital platform brings the showroom to your fingertips,
            offering a seamless exploration of top-tier vehicles with
            unparalleled convenience and sophistication
          </p>
          <h3 className="heading-3 pb-6">Our Digital Showroom Offerings:</h3>
          <ul className="flex flex-col gap-5 justify-start items-start">
            {offeringsItems.map((item, idx) => (
              <li key={idx}>
                <StaggerEffect id={idx}>
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-2xl text-s1">
                      <PiCheckCircleFill />
                    </span>{" "}
                    {item}
                  </div>
                </StaggerEffect>
              </li>
            ))}
          </ul>
        </div>
        <div className="xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
          <FadeRight>
            <img
              src={img}
              alt=""
              className="object-fit hover:scale-110 duration-500"
            />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default WeHelpSection;
