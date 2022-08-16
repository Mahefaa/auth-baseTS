import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Loading from "../components/Loading";
const AuthRoute : React.FC<{children:React.ReactNode}> = (props) =>{
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false);
    useEffect(()=> {
        const authCheck=onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                return navigate("/login");
            }
        })
        return ()=>authCheck();
    },[auth,navigate]);
    if(loading){
        return <Loading/>
    }
    return <>{props.children}</>
}
export default AuthRoute;