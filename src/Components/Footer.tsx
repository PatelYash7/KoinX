import { useRecoilValue } from "recoil";
import { SparklineDataState } from "../Store/Atoms";


interface Item {
    item: {
      coin_id:number;  
      name: string;
      symbol: string;
      large: string;
      data: {
        price_change_percentage_24h: Record<string, number>;
        sparkline:Record<string,string>;
      };
    };
}

function Footer() {
    const data = useRecoilValue(SparklineDataState);
    console.log(data)
  return (
    <div>Footer
    </div>
  )
}

export default Footer