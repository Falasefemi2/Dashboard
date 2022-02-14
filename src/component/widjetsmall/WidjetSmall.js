import { Visibility } from "@material-ui/icons";
import "./widjetsmall.css";

export default function WidjetSmall() {
    return (
        <div className="widjetsm">
            <span className="widjetsmTitle">New Join Members</span>
            <ul className="widgetsmList">
                <li className="widgetsmallListItem">
                    <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widgetsmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Falase Femi</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widjetsmButton">
                            <Visibility className="widgetsmIcon" />
                            Display
                        </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widgetsmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Falase Femi</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widjetsmButton">
                            <Visibility className="widgetsmIcon" />
                            Display
                        </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widgetsmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Falase Femi</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widjetsmButton">
                            <Visibility className="widgetsmIcon" />
                            Display
                        </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="" className="widgetsmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Falase Femi</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widjetsmButton">
                            <Visibility className="widgetsmIcon" />
                            Display
                        </button>
                </li>
            </ul>
        </div>
    )
}
