import img from "/images/SaleS2.jpg";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";

function TaxationVideoSection() {
  return (
    <section className=" bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6">
          <FadeLeft>
            <div className=" flex justify-center items-start flex-col">
              <h2 className="display-4">Revitalize Your Ride:</h2>
              <h5 className="text-5xl">
                {" "}
                Discover the Ultimate Vehicle Exchange Experience!
              </h5>
              <p className=" font-medium py-5">
                Trade up your wheels hassle-free with our premier Vehicle
                Exchange platform. Find your perfect match and hit the road in
                style!{" "}
              </p>
              <p className=" text-bodyText">
                Elevate your driving experience with our cutting-edge Vehicle
                Exchange service. Say goodbye to the old and hello to the new as
                you effortlessly trade up your wheels. Discover a seamless
                process tailored to your needs, ensuring you find the perfect
                match. Upgrade your ride today and embark on a journey of
                automotive excellence!.{" "}
              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-start-8  ">
          <FadeRight>
            <div className=" relative flex justify-center items-center bg-[url('/images/taxation_video_img.png')] bg-no-repeat bg-cover  max-[400px]:h-[250px] max-[500px]:h-[300px] h-[370px] sm:h-[400px]">
              <img src={img} className="h-[400px]" alt="" />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default TaxationVideoSection;
