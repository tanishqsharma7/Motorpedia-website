import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { integrationsCard } from "../../data/data";

function Integrations() {
  return (
    <section className=" stp-30   sbp-30">
      <div className="container grid grid-cols-12">
        <div className="flex justify-start items-start col-span-12 lg:col-span-5 max-lg:sbp-15">
          <div className="  max-w-[600px] flex justify-start items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white ">
              Integrations
            </p>
            <h1 className="display-4  pt-4 pb-6">
              Your one place solution to all your motor hardships!
            </h1>
            <p className="text-bodyText">
              Experience seamless coordination with our comprehensive services.
              From RTO Services to Technological Integrations, we bring
              everything together in one place,
            </p>
          </div>
        </div>

        {integrationsCard.map(({ id, icon, title, description }, idx) => (
          <div
            key={id}
            className={` col-span-12  min-[500px]:col-span-6 lg:col-span-3 hover:bg-slate-300 ${
              idx === 0
                ? " lg:col-start-7"
                : idx === 2
                ? "lg:col-start-4  min-[500px]:max-lg:order-2"
                : ""
            } ${
              idx % 2 === 0
                ? "bg-white shadow-lg rounded-2xl "
                : "border-0  hover:shadow-none rounded-2xl  "
            }  hover:shadow-2xl border  hover:scale-90  duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8`}
          >
            <div
              className={`text-4xl rounded-full text-s2 p-4 ${
                idx % 2 === 0 ? "bg-white" : "bg-white"
              }`}
            >
              {icon}
            </div>
            <h4 className="heading-4 pt-6 w-[200px]">{title}</h4>
            <p>{description}</p>
            <div className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium">
              <Link
                to={"/services"}
                className="bg-s1 p-2 rounded-full  text-white shadow2 "
              >
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrations;
