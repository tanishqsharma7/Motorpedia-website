import FadeLeft from "../animation/FadeLeft";
import FadeTop from "../animation/FadeTop";

type Props = {
  sectionName: string;
  sectionTitle: string;
  sectionDesc: string;
};

function SectionHeadingCenter({ sectionTitle, sectionDesc }: Props) {
  return (
    <div className="flex justify-center items-center max-xxl:overflow-hidden">
      <div className="  max-w-[700px] text-center flex justify-center items-center flex-col">
        <FadeLeft>
          <h1 className="display-4 text-[45px]  pt-4 pb-4 lg:pb-6">
            {sectionTitle}
          </h1>
        </FadeLeft>
        <FadeTop>
          <p className=" text-black">{sectionDesc}</p>
        </FadeTop>
      </div>
    </div>
  );
}

export default SectionHeadingCenter;
