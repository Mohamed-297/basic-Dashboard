import Chart from "../../Components/charts/Chart"
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo"
import WidgetLg from "../../Components/WidgetLg/WidgetLg"
import WidgetSm from "../../Components/WidgetSm/WidgetSm"
import { userData } from "../../dummyData"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart 
                title="User Analytics"
                data={userData}
                grid
                dataKey="Active user"
            />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
