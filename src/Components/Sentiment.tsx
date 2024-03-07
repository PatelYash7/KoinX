import { ExclamatorySVG, NoteSVG, SideBar, StockUpSVG } from "../Resources/Svg";
function Sentiment() {
  return (
    <div className="p-6 bg-white rounded-lg pb-14">
      <div className="text-2xl font-semibold text-headingColor">Sentiment</div>
      <div className="flex items-center justify-start gap-2 mt-4">
        <div className="font-medium text-[19px] text-[#44475B]">Key Events</div>
        <div>
          <ExclamatorySVG />
        </div>
      </div>

      {/* Slider Comes here */}
      <div className="flex gap-2 ">
        <div className="flex  justify-start p-4 gap-3 rounded-xl w-[50%] my-4 bg-[#E8F4FD]">
          <div>
            <NoteSVG />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-[#191C1F] ">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </div>
            <div className="text-sm font-medium text-[#3E5765]">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </div>
          </div>
        </div>
        <div className="flex  justify-start p-4 gap-3 rounded-xl w-[50%] my-4 bg-[#EBF9F4]">
          <div>
            <StockUpSVG />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-[#191C1F] ">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </div>
            <div className="text-sm font-medium text-[#3E5765]">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-2 mt-4">
        <div className="font-medium text-[19px] text-[#44475B]">
          Analyst Estimates
        </div>
        <div>
          <ExclamatorySVG />
        </div>
      </div>

      <div className="flex gap-8 mt-4">
        <div className="bg-[#EBF9F4] text-[#0FBA83] text-4xl font-medium py-10 mt-4 px-8 rounded-[60px]">
          79%
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-1">

          <div className="flex items-center justify-between gap-6">
            <div className="text-[#7C7E8C] text-base font-medium pr-3">Buy</div>
            <div className="flex items-start justify-between gap-2">
              <div className="flex pl-1">
                <SideBar code="#00B386" width="350"/>
              </div>
              <div className="text-[#7C7E8C] text-base font-medium">76%</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="text-[#7C7E8C] text-base font-medium pr-3">Hold</div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex justify-center item-center bg-[#C7C8CE] rounded-sm">
                <SideBar code="#C7C8CE" width="60"/>
              </div>
              <div className="text-[#7C7E8C] text-base font-medium">8%</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="text-[#7C7E8C] text-base font-medium pr-3">Sell</div>
            <div className="flex items-center justify-between gap-2 pl-1">
              <div className="flex justify-center item-center bg-[#F7324C] rounded-sm">
                <SideBar code="#F7324C" width="180"/>
              </div>
              <div className="text-[#7C7E8C] text-base font-medium">16%</div>
            </div>
          </div> 

        </div>
      </div>
    </div>
  );
}

export default Sentiment;
