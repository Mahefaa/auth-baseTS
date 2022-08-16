import {signOut} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC<{}> = (props) =>{
    return (
        <div>
            <p>welcome</p>
            <input type={"button"} onClick={()=>signOut(auth)} value={"log out"}/>
        </div>
    )
}
export default HomePage;