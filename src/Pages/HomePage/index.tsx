import {signOut,User} from "firebase/auth";
import React from "react";
import './index.modules.css';
import {auth} from "../Login/config";

const HomePage : React.FC<{}> = (props) =>{
    const userToString:string = window.localStorage.getItem("toString") || "{\"data\":\"none\"}";
    let userInfo:User = toJson(userToString);
    return (
        <div className={"body"}>
            <header>
                <span className={"menu"}>
                    <p>
                        welcome
                        <b>
                            {` ${window.localStorage.getItem("mail") || window.localStorage.getItem("uid")}`}
                        </b>
                    </p>
                    <input type={"button"} onClick={()=>signOut(auth)} value={"log out"} className={"logout__btn"}/>
                </span>
            </header>
            <div className={"container"}>
                Here's What We Found About You. please keep it secret !
                <span className={"content__text"}>
                    {Object.entries(userInfo).map((array)=>(
                        <p>{`${array[0]} = ${array[1]}`}</p>
                    ))}
                </span>
            </div>

        </div>
    )
}
const toJson:(arg:string)=>User=(arg)=>{
    try{
        return JSON.parse(arg);
    }
    catch (error){
        console.error(error)
    }
}
export default HomePage;