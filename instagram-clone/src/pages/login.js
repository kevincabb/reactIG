import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const valid = password === '' || emailAddress === '';

    const handleLogin = () => { };

    useEffect(
        () => {
            document.title = 'Login - Instagram';
        }, []
    )
    return (<div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <p>This is the login portion</p>
    </div>)
}