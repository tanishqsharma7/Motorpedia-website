import { whatWeDo } from "../../data/data";
//import SectionHeadingCenter from "../global/SectionHeadingCenter";
import img from "/images/lead21.png";

function WhatWeDo() {
  return (
    <section className=" bg-[url(/images/counter_bg.jpeg)]   stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center text-white items-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Lead generation</h1>
            <br></br>
            <h1 className="text-xl">
              Revolutionize lead generation with our digitalization services.
              Harness cutting-edge technology for unparalleled growth
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-6 stp-15">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex overflow-hidden justify-center items-center self-stretch">
            <img
              src={img}
              alt=""
              className=" hover:scale-110 rounded-2xl w-full  duration-500 h-[500px]"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 text-white flex flex-col gap-6 xl:gap-10 justify-start items-start">
            {whatWeDo.map(({ id, title, desc }, idx) => (
              <div
                key={id}
                className="flex justify-start items-start gap-4  sm:gap-6 group"
              >
                <div
                  className={`heading-4 group-hover:bg-s2 p-4 rounded-full relative  duration-500 ${
                    idx + 1 === whatWeDo.length
                      ? ""
                      : "after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]"
                  }`}
                >
                  <span className="text-white bg-s1 w-10 h-10 rounded-full  flex justify-center items-center !leading-none">
                    {idx + 1}
                  </span>
                </div>
                <div
                  className={` border-strokeColor ${
                    idx === whatWeDo.length - 1
                      ? " border-strokeColor"
                      : "border-b"
                  }`}
                >
                  <h4 className="heading-4">{title}</h4>
                  <p className=" text-white pt-3 pb-3 ">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
