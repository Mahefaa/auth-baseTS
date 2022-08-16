import {signOut,getAuth} from "firebase/auth";

const HomePage : React.FC<{app:any}> = (props) =>{
    const auth = getAuth();
    return (
        <div>
            <p>welcome</p>
            <input type={"button"} onClick={()=>signOut(auth)} value={"log out"}/>
        </div>
    )
}
export default HomePage;