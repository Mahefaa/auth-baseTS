import React from "react";
import './index.modules.css';
const Login : React.FC<{}>=()=>{
    return (
        <div className={"login__card"}>
            <form className={"login__form"}>
                <span className={"login__input"}>
                    <label htmlFor={"login__username"} className={"label"}>Email ID</label>
                    <input type={"text"} id={"login__username"} placeholder={" "}/>
                </span>
                <span className={"login__input"}>
                    <label htmlFor={"login__password"} className={"label"}>Password</label>
                    <input type={"password"} id={"login__password"} placeholder={" "}/>
                </span>
                <span>
                    <input type={"button"} id={"login"} value={"LOGIN"} className={"login__button"}/>
                </span>
                <span className={"icons"}>
                    <i>Google</i>
                    <i>Facebook</i>
                    <i>Github</i>
                </span>
            </form>
        </div>
    )
}
export default Login;