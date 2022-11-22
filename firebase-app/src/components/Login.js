import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase";

export const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div>
            <div
                  style={{height: window.innerHeight - 50}}
            >
                <div style={{width:400, background: 'lightgray'}}
                >
                    <div>
                        <button onClick={login}>Войти с помощью Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};