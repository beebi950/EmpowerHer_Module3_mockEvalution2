import React,{useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const Login=({setIsAuth}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();

    useEffect(() => {
        emailRef.current.focus();
    },[]);

    const handleLogin=() =>{
        if(email === 'admin@gmail.com' && password === 'admin123'){
            alert("Login Successful");
            setIsAuth(true);
            navigate('/admin');
        }
        else{
            alert("Invalid Credentials");
        }
    };

    return(
        <div className="login">
            <h2>Admin Login</h2>
            <input ref={emailRef}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>

        </div>
    );
};

export default Login;