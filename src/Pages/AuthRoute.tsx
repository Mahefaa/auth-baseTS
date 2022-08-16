import {onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import React, {Dispatch, SetStateAction, useEffect} from "react";
import {auth} from "./Login/config";
const AuthRoute : React.FC<{children:React.ReactNode,setLoading:Dispatch<SetStateAction<boolean>>}> = (props) =>{
const navigate = useNavigate();
useEffect(()=>{
        const authCheck=onAuthStateChanged(auth, (user) => {
            if (!user) {
                return navigate("/login");
            }
        })
    return ()=>authCheck();
})
    return <>{props.children}</>
}
export const Redirect :React.FC<{children:React.ReactNode,setLoading:Dispatch<SetStateAction<boolean>>}> = (props) =>{
    const navigate = useNavigate();
    useEffect(()=> {
        const authCheck=onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/")
            }
        })
        return ()=>authCheck();
    },[navigate]);
    return <>{props.children}</>
}
export default AuthRoute;