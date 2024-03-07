import ChartMain from "./ChartMain";
import Charthead from "./Charthead";
import TradingViewWidget from "./TradingViewWidget";

function Chartsection() {
  return (
    <div  className="flex flex-col gap-10 p-4 bg-white rounded-md mobile:p-6">
      <Charthead  />
      <ChartMain />
      <div>
        <div className="p-[1px] mb-6 w-full  bg-[#DEE1E6]"></div>
        <div className="pb-3 text-base font-semibold">
          Bitcoin Price Chart(USD)
        </div>
        <TradingViewWidget symbol="BTC" />
      </div>
    </div>
  );
}

export default Chartsection;
