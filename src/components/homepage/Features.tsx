import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { featuresCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function Features() {
  return (
    <section className="  bg-[#07205D]  stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-s3 py-3 px-5 rounded-full text-black font-bold ">
              Features
            </p>
            <h1 className="display-4  text-white pt-4 ">
              Perfect solutions for your business
            </h1>
          </div>
          <p className="text-white max-w-[500px]">
            We’re simplifying every aspect of managing a world-wide team, from
            benefits and equity to working visas and equipment. It’s one
            platform made to get you set up.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {featuresCard.map(({ id, icon, name, desc }, idx) => (
            <div className="col-span-12  sm:col-span-6 lg:col-span-3 " key={id}>
              <StaggerEffect id={idx}>
                <div className="bg-[#203A74]  p-6 xl:p-8 flex flex-col rounded-2xl shadow-xl  group hover:border-mainTextColor duration-700 hover:bg-white/75">
                  <div className="text-4xl text-s1 bg-white w-[53px] mb-5 rounded-full p-2 group-hover:text-mainTextColor duration-500">
                    {icon}
                  </div>
                  <h4 className="heading-4 group-hover:text-mainTextColor text-white pb-5">
                    {name}
                  </h4>
                  <p className=" text-white group-hover:text-mainTextColor pb-6">
                    {desc}
                  </p>
                  <Link
                    to={"/contact"}
                    className="flex justify-start bg-white w-[140px] rounded-2xl  text-s1 h-[40px] p-3 items-center gap-2 font-medium"
                  >
                    Learn more <GoArrowRight />
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
