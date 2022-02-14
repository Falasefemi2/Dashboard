import "./home.css";
import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import { userData } from "../Home/dummyData";
import WidjetSmall from "../../widjetsmall/WidjetSmall";
import WidjetLarge from "../../widjetlarge/WidjetLarge";



export default function Home() {
  return (
      <div className="home">
                  <FeaturedInfo />
          <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidjets">
            <WidjetSmall />
            <WidjetLarge />
          </div>
      </div>
  );
}
