import BreadCrumb from "../Components/BreadCrumb";
import Cardcontent from "../Components/Cardcontent";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className=" h-fit bg-mainBg">
      <div className="flex items-center justify-center h-[60px] bg-white px-14">
        <Navbar />
      </div>
      <div className="py-3 px-14">
        <BreadCrumb/>
      </div>
      <div className=" mx-14">
        <Cardcontent/>
      </div>
    </div>
  );
}

export default Home;
