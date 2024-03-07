import RangeSlider from "../Resources/Png/RangeSlider.png";
import { SliderTriangleSVG } from "../Resources/Svg";

function PerformanceSection() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg">
      <div className="text-2xl font-semibold text-headingColor">Performace</div>
      {/* Lines */}
      <div className="flex flex-col gap-7">
        {/* First */}
        <div className="flex items-center gap-4 justify-evenly">

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">Today's Low</div>
            <div className=" text-base font-medium text-[#44475B]">46,930.22</div>
          </div>

          <div className="flex flex-col items-end gap-1 ">
            <img src={RangeSlider} alt="slider" />
            <div className="">
                <div className="flex items-center justify-center">
                    <SliderTriangleSVG/>
                </div>
                <div className="pt-1 text-center text-[#44475B] font-normal text-sm">
                    $48,637.83
                </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">Today's High</div>
            <div className=" text-base font-medium text-[#44475B]">49,343.83</div>
          </div>

        </div>
        {/* Second */}
        <div className="flex items-center gap-4 justify-evenly">

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">52W Low</div>
            <div className=" text-base font-medium text-[#44475B]">16,930.22</div>
          </div>

            <div>
                <img src={RangeSlider} alt="" />
            </div>

          <div className="flex flex-col justify-center gap-[10px] pr-4">
            <div className="text-sm font-normal text-[#44475B]">52W High</div>
            <div className=" text-base font-medium text-[#44475B]">49,743.83</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PerformanceSection;
