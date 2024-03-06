// import TradingViewWidget from "./TradingViewWidget"

import ChartMain from "./ChartMain";
import Charthead from "./Charthead";
import TradingViewWidget from "./TradingViewWidget";

function Chartsection() {
  return (
    <div className="flex flex-col gap-10 p-6 bg-white rounded-md">
      <Charthead />
      <ChartMain />
      <div>
        <div className="p-[1px] mb-6 w-[900px]  bg-[#DEE1E6]"></div>
        <div className="pb-3 text-base font-semibold">
          Bitcoin Price Chart(USD)
        </div>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Chartsection;
