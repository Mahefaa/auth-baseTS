import React, {Dispatch, SetStateAction, useState} from "react";
import './index.modules.css';
import {GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider,signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import {auth} from "./config";
const Login : React.FC<{}>=(props)=>{
    const navigate = useNavigate();
    const signIn = async(authProvider:any)=>{
        signInWithPopup(auth,authProvider).then((response)=>{
            navigate("/");
        }).catch((error)=>{
            console.error(error);
        })
    }
    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>,setter:Dispatch<SetStateAction<string>>)=>{
        setter(event.target.value);
    }
    return (
        <div className={"login__card"}>
            <form className={"login__form"}>
                <span className={"login__input"}>
                    <label htmlFor={"login__username"} className={"label"}>Email ID</label>
                    <input type={"text"} id={"login__username"} placeholder={" "}
                           onChange={
                        (event)=>handleChange(event,setUsername)
                    }/>
                </span>
                <span className={"login__input"}>
                    <label htmlFor={"login__password"} className={"label"}>Password</label>
                    <input
                        type={"password"}
                        id={"login__password"}
                        placeholder={" "}
                        onChange={(event)=>handleChange(event,setPassword)}
                    />
                </span>
                <span>
                    <input
                        type={"button"}
                        id={"login"}
                        value={"LOGIN"}
                        className={"login__button"}
                        onClick={
                            ()=>signInWithEmailAndPassword(auth,username,password)
                        }
                    />
                </span>
                <span className={"icons"}>
                    <i onClick={()=>signIn(new GoogleAuthProvider())}>Google</i>
                    <i onClick={()=>signIn(new FacebookAuthProvider())}>Facebook</i>
                    <i onClick={()=>signIn(new GithubAuthProvider())}>Github</i>
                    <code>{}</code>
                </span>
            </form>
        </div>
    )
}
export default Login;