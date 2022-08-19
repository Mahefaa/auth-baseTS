import {signOut} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC = () =>{
    return (
        <div className={"body"}>
            <header className="navigation">
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
                            <input type={"button"} onClick={()=>signOut(auth)} value={"log out"} className={"logout__btn"}/>
                        </div>

                </p>
            </header>
            <div className={"container"}>
                <div className={"container__body"}></div>
                <div className={"container__text"}>
                    <p>
                        Successfully Connected Mister
                            <strong className={"important"}>{` ${window.localStorage.getItem("mail")} `}</strong>
                        <hr/>
                        <p>
                            here's your Unique ID:
                            <strong className={"important"}>{`${window.localStorage.getItem("uid")}`}</strong>
                        </p>
                    </p>
                </div>
            </div>

        </div>
    )
}
export default HomePage;
