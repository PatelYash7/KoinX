import BTC from "../Resources/Png/bitcoin-btc-logo.png";

function Charthead() {
  return (
    <div className="flex justify-start gap-10">
      <div className="flex justify-start gap-2">
        <div className="">
          <img src={BTC} alt="logo" className="w-9 h-9" />
        </div>
        <div className="text-2xl font-semibold text-center">Bitcoin</div>
        <div className="my-auto text-base font-semibold text-center text-textLgt">
          BTC
        </div>
      </div>
      <div className="">
        <div className=" py-2 px-2 my-auto text-base text-white font-medium rounded-md bg-[#808A9D]">
          Rank #1
        </div>
      </div>
    </div>
  );
}

export default Charthead;
