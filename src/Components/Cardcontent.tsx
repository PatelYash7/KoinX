import Chartsection from "./Chartsection";
import Offersection from "./Offersection";

function Cardcontent() {
  return (
    <div className="flex gap-5">
        {/* Left section */}
      <div className=" w-[93%] h-fit">
        <Chartsection/>
      </div>

      {/* Right Section */}
      <div className=" flex flex-col gap-5 w-[40%]"> 
           <Offersection/>  
      </div>
    </div>
  );
}

export default Cardcontent;
