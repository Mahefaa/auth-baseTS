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