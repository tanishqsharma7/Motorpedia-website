import LinkButton from "../ui/LinkButton";
import img from "/images/dedicated_img.png";

function DedicatedSupport() {
  return (
    <section className="stp-30 sbp-30 bg-[url(/images/counter_bg.jpeg)] ">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden">
          <img
            src={img}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white ">
            360° Photoshoot
          </p>
          <h2 className="display-4 pt-4 text-white pb-6">360° WalkArounds</h2>
          <p className=" text-white pb-8">
            Revolutionize your online shopping experience with immersive,
            jaw-dropping features that leave shoppers spellbound
          </p>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default DedicatedSupport;
