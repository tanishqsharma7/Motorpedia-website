import { whyMotorpediaCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhyAccoupay() {
  return (
    <section className=" bg-[url(/images/counter_bg.jpeg)]  stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-s2  py-3 px-5 rounded-full text-black font-bold ">
              Why Motorpedia
            </p>
            <h1 className="display-4  text-white  pt-4 ">
              A platform for your global team
            </h1>
          </div>
          <p className="text-white max-w-[500px]">
            Your dependable guide to achieving freedom from manual HR work and
            building that perfect workplace you have always aspired to build.
            Your dependable guide to achieving freedom.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whyMotorpediaCard.map(({ id, img, title, des }, idx) => (
            <div
              key={id}
              className="col-span-12 sm:col-span-6 shadow-2xl lg:col-span-3  "
            >
              <StaggerEffect id={idx}>
                <div className="bg-white flex  flex-col items-center hover:shadow-2xl rounded-2xl border-white group   duration-700">
                  <div className="">
                    <img
                      className="h-[300px] w-[450px] rounded-2xl"
                      src={img}
                      alt=""
                    />
                  </div>
                  <h4 className="pt-2 text-black   heading-4">{title}</h4>
                  <p className="p-4">{des}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAccoupay;
