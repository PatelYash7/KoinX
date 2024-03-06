import Chartsection from "./Chartsection";
import Navigation from "./Navigation";
import Offersection from "./Offersection";
import PerformanceSection from "./PerformanceSection";
import TrendingSection from "./TrendingSection";

function Cardcontent() {
  return (
    <div className="flex gap-5">
        {/* Left section */}
      <div className=" w-[93%] h-fit">
        <Chartsection/>
        <Navigation/>
        <PerformanceSection/>
      </div>

      {/* Right Section */}
      <div className=" flex flex-col gap-5 w-[40%]"> 
           <Offersection/>
           <TrendingSection/>  
      </div>
    </div>
  );
}

export default Cardcontent;
