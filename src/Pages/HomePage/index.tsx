import {signOut} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC<{}> = (props) =>{
    return (
        <header>
            <span></span>
            <span className={"userInfo"}>
                <p>{`welcome ${window.localStorage.getItem("mail") || window.localStorage.getItem("uid")}`}</p>
                <input type={"button"} onClick={()=>signOut(auth)} value={"log out"}/>
            </span>
        </header>
    )
}
export default HomePage;