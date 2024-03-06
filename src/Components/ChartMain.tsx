import axios from "axios";
import { useEffect, useState } from "react";

function ChartMain() {
  const response = fetchData();
  const rupee = NumToRup(response.inr);
  const USD = NumToUSD(response.usd);
  const [isPositive, setisPositive] = useState(false);
  if (response.usd_24h_change > 0) {
    setisPositive(true);
  }
  const Change = Math.abs(response.usd_24h_change).toFixed(2);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-start gap-8">
        <div className="flex flex-col items-start">
          <div className="font-semibold text-[28px]">{USD}</div>
          <div className="text-base font-medium ">{rupee}</div>
        </div>
        {isPositive ? (
          <div className="flex gap-3 ">
          <div className="text-base font-medium text-center h-fit text-[#14B079] gap-2 rounded px-2  bg-green-100 mt-2 flex items-center">
            <div className="text-[#14B079] w-[11px] h-[8px] mb-1 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                className=""
              >
                <path d="M24 22h-24l12-20z" />
              </svg>
            </div>
            {Change}%
          </div>

          <div className="pt-2  text-sm text-[#768396] font-medium">
              (24H)
          </div>
        </div>
        ) : (
          <div className="flex gap-3 ">
            <div className="flex items-center gap-2 px-2 mt-2 text-base font-medium text-center text-red-700 bg-red-100 rounded h-fit">
              <div className="text-red-700 w-[11px] h-[8px] mb-1 text-center">
                {/* DownTriangle */}
              </div>
              {Change}%
            </div>

            <div className="pt-2  text-sm text-[#768396] font-medium">
                (24H)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const fetchData = () => {
  const [response, setResponse] = useState({
    inr: 0,
    inr_24h_change: 0,
    usd: 0,
    usd_24h_change: 0,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
      )
      .then((res: any) => {
        setResponse(res.data.bitcoin);
      });
  }, []);
  return response;
};
function NumToRup(number: number) {
  if (isNaN(number)) {
    return "Invalid Number";
  }
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(number);
}
function NumToUSD(number: number) {
  if (isNaN(number)) {
    return "Invalid Number";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
}
export default ChartMain;
