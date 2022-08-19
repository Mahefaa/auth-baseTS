import {initializeApp} from "firebase/app";
import {FirebaseApp} from '@firebase/app';
import {getAuth} from "firebase/auth";
const config = {
    firebaseConfig: {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
        appId: process.env.REACT_APP_APPID
    }
};
const app:FirebaseApp = initializeApp(config.firebaseConfig);
export const auth = getAuth(app);
export const save:()=>void = ()=>{
    window.localStorage.setItem("uid",auth.currentUser?.uid||"");
    window.localStorage.setItem("mail",auth.currentUser?.email||"");
    window.localStorage.setItem("url",auth.currentUser?.photoURL||"https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg")
}
