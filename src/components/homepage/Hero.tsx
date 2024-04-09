import { Link } from "react-router-dom";
import StaggerEffectTwo from "../animation/StaggerEffectTwo";
import heroBgElement1 from "/images/hero_bg_element1.png";
import heroBgElement2 from "/images/hero_bg_element2.png";
import heroBgElement3 from "/images/hero_bg_element3.png";
import heroIllus from "/images/car2.png";

function Hero() {
  const text = "Automotive";
  const animateWord = text.split("");
  return (
    <section className="bg-[url(/images/texture.png)] bg-repeat stp-30 hero_bg_gradient overflow-hidden">
      <img
        src={heroBgElement1}
        alt=""
        className=" absolute top-0 left-0 xxxl:left-36 max-lg:w-[3000px] max-xxl:w-[5000px] max-md:hidden"
      />
      <img
        src={heroBgElement2}
        alt=""
        className=" absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
      />
      <div className="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12 ">
        <img
          src={heroBgElement3}
          alt=""
          className=" absolute top-1/3 left-1/3 max-sm:hidden"
        />
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className=" text-base  lg:text-[25px] font-semibold">
            Driving Success Together{" "}
          </p>
          <div className="display-2   ">
            We Empower{" "}
            <div className="text-s3 inline-flex">
              {animateWord.map((word, idx) => (
                <StaggerEffectTwo key={idx} id={idx}>
                  <span>{word}</span>
                </StaggerEffectTwo>
              ))}
            </div>
            <br /> Dealerships
          </div>
          <p className="max-w-[550px] text-[18px]">
            We streamline your Dealership with Effortless Digitalization,
            Seamless RTO Operations, Enhanced Leads, Maximized Conversions
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              to={"/contact"}
              className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Know More
            </Link>
            {/* <Link to={"/faq"} className=" underline font-medium">
              Learn More
            </Link> */}
          </div>
        </div>
        <div className="col-span-9 lg:col-span-6 lg:col-start-7 relative ">
          <img src={heroIllus} className="pt-[80px]" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
