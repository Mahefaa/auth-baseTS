import React, {Dispatch, SetStateAction, useState} from "react";
import './index.modules.css';
import {GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import {auth, save} from "./config";
import Loading from "../../components/Loading";
import Input from "../../components/Input";
const Login : React.FC<{}>=(props)=>{
    const navigate = useNavigate();

    const popUpSign = async(authProvider:GoogleAuthProvider|FacebookAuthProvider|GithubAuthProvider)=>{
        setLoading(true);
        signInWithPopup(auth,authProvider)
            .then((response)=>{
                save();
                setLoading(false);
                navigate("/");
        })
            .catch((error)=>{
                setLoading(false);
                setMessage(error.message);
        });
    }

    const sign:()=>void=()=>{
        if(create){
            createUserWithEmailAndPassword(auth,username,password)
                .then(()=>{
                    setMessage("account successfully created");
                    emailSign(username,password);
            })
                .catch((error)=>{
                    setMessage(error.message);
                    setLoading(false);
            })
        }
        else{
            emailSign(username,password);
        }
    }
    const emailSign:(email:string,password:string)=>void =(email, pass)=>{
        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                save();
                setLoading(false);
                navigate("/");
            })
            .catch(() => {
                setMessage("wrong credentials");
                setLoading(false);
            });
    }
    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [message,setMessage] = useState<string>();
    const [isLoading,setLoading]=useState<boolean>(false);
    const [create,setCreate]=useState<boolean>(false);
    const [confirmPass,setConfirmPass]=useState<string>("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>,setter:Dispatch<SetStateAction<string>>)=>{
        setter(event.target.value);
    }
    return (
        <div className={"login__card"}>
            <form className={"login__form"}>
                <Input
                    className={"login__input"}
                    id={"login__username"}
                    label={"Email ID"}
                    type={"text"}
                    onChange={(event)=>handleChange(event,setUsername)}
                    disabled={isLoading}
                />
                <Input
                    className={"login__input"}
                    id={"login__password"}
                    label={"Password"}
                    type={"Password"}
                    onChange={(event)=>handleChange(event,setPassword)}
                    disabled={isLoading}
                />
                {create &&
                    <Input
                        className={"login__input"}
                        id={"login__password__confirm"}
                        label={"Confirm Password"}
                        type={"password"}
                        onChange={(event)=>handleChange(event,setConfirmPass)}
                        disabled={isLoading}
                    />
                }


                <strong style={{opacity:0.8,color:"white", textAlign:"center"}}>{message}</strong>
                <Input
                    className={"login__button"}
                    id={"login"}
                    type={"button"}
                    disabled={isLoading}
                    onClick={() => {
                        if (confirmPass !== password && create) {
                            setMessage("passwords don't match");
                        } else {
                            setMessage("");
                            setLoading(true);
                            sign();
                        }
                    }}
                    value={"login"}
                />
                <span className={"icons"}>
                    <i  onClick={()=>popUpSign(new GoogleAuthProvider())} aria-disabled={isLoading}>Google</i>
                    <i onClick={()=>popUpSign(new FacebookAuthProvider())} aria-disabled={isLoading}>Facebook</i>
                    <i onClick={()=>popUpSign(new GithubAuthProvider())} aria-disabled={isLoading}>Github</i>
                </span>
                <span
                    className={"option"}
                    onClick={
                        ()=>setCreate((prevState)=>!prevState)}
                    >{!create?"create account ?": "sign in"}
                </span>
                <Loading hidden={!isLoading} />
            </form>
        </div>
    )
}
export default Login;