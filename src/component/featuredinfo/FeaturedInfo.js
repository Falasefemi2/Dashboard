import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$700</span>
                    <span className="featuredMoneyRate"> -11.9 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$600</span>
                    <span className="featuredMoneyRate"> -110.9 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$780</span>
                    <span className="featuredMoneyRate"> +21.9 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    );
}
