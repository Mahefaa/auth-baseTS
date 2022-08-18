import {signOut} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC<{}> = (props) =>{
    return (
        <div className={"body"}>
            <header>
                <span className={"menu"}>
                    <p>welcome</p>
                    <strong>{`${window.localStorage.getItem("mail") || window.localStorage.getItem("uid")}`}</strong>
                    <input type={"button"} onClick={()=>signOut(auth)} value={"log out"}/>
                </span>
            </header>
        </div>
    )
}
export default HomePage;