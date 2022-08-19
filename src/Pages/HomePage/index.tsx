import {signOut} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC<{}> = (props) =>{
    return (
        <div className={"body"}>
            <div className="navigation">

                <p className="menu">
                    <img
                        src={window.localStorage.getItem("url")||"defaultUrlAlreadyInItem"} alt={"profile pic"}/>

                        <div className="logout">
                            <p>
                                welcome
                                <b>
                                    {` ${window.localStorage.getItem("mail") || window.localStorage.getItem("uid")}`}
                                </b>
                            </p>
                            <p onClick={()=>signOut(auth)}>Log out</p>
                        </div>

                </p>

            </div>
            <div className={"container"}>
                <div className={"container__body"}></div>
                <div className={"container__text"}>
                    <h1>Final Examination</h1>
                    <p>Here's a little evolution catchup</p>
                    <span className={"project__links"}>
                        <a href={"https://kanban-typescript.herokuapp.com/"} target={"_blank"} rel={"noreferrer"}>kanban</a>
                        <a href={"https://typescript-rekognition.netlify.app/"} target={"_blank"} rel={"noreferrer"}>rekognition</a>
                        <a href={"https://auth-base.netlify.app/"} target={"_blank"} rel={"noreferrer"}>firebase</a>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default HomePage;
