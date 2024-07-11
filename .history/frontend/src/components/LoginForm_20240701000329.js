import React, { useState} from 'react';
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/login",{username,password});
            console.log(response.data);

            window.location.href = '/home';

        }catch(error)
        {
            console.error("login error:", error.response.data.message);
            window.alert("invalid  username or password");
            // window.alert("invalid username or password");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const customPrimaryColor = '#27012d';
    const customSecondaryColor = '#ffffff';

    return (
        <div>
            <nav className="navbar navbar-green bg-green pt-3 pb-2" style={{ backgroundColor: customPrimaryColor }} >
                <div className="container-fluid">
                    {/* <span class="navbar-brand mb-0 h1">Dune state University</span> */}
                    <a className="navbar-brand " href="#" style={{ color: customSecondaryColor }}>
                        <img src="/dune.jpg" alt="" width="50" height="40" className="d-inline-block align-text-top " />
                        <br></br>
                        Dune state University
                    </a>
                </div>
            </nav>
            
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center pt-5 mt-5">
                            <div className="card pt-4" style={{ width: '380px', height: '380px' }}>
                                <div className="card-body">
                                    <h2 className="card-title">Login</h2>
                                    <br></br>
                                    
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Username:</label>
                                            <br></br>
                                            <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label>Password:</label>
                                            <br></br>
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={handlePasswordChange} />
                                            <input type="checkbox" onChange={handleTogglePassword} /> Show Password
                                        </div>
                                        <br>
                                        </br>
                                        <button type="submit" className="btn btn-dark" >LOGIN</button>
                                        
                                    </form>
                                    {/* {error && <p className="text-danger">{error}</p>} */}
                                </div>
                            </div>
                        </div>

        </div>


                     
    );
};

export default LoginForm;






















// import React,{useEffect,useState} from "react";
// import axios from "axios";




// function LoginForm()
// {
//     const [username,setUsername] = useState('');
//     const [password,setPassword] = useState('');
//     const [error, setError] = useState('');

//     useEffect(()=>{
//         if(username.length === 10)
//         {
//             setError("username must be at least 10 characters");

//         }
//         else{
//             setError('');
//         }
//     }, [username]//In this case, [username] means that the effect will re-run whenever the username state variable changes. 

//     );

//     useEffect(()=>
//     {
//         if(password.length<4)
//         {
//             setError("password cannot be set");
//         }
//         else{
//             setError('');
//         }
//     },[password]

//     );

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/login', { username, password });
//             console.log(response.data);
//         } catch (error) {
//             console.error('Login error:', error.response.data.message);
//         }
//     };




    //  const handelUsernameChange =(event) =>
//     {
//         setUsername(event.target.value);
//     };
   
//     const handelPasswordChange =(event)=>
//     {
//         setPassword(event.target.value);
//     };

//     return(
//         <div className="cover">
//             <h1>LoginForm</h1>
//             <form>
//                 <label htmlFor = "userName">UserName</label><br/>
//                 <input type="text" id="userName" value={username} name="username-login" onChange={handelUsernameChange} placeholder="username"></input>
//                 <br></br>
//                 <label htmlFor="passWord">Password</label>
//                 <br></br>
//                 <input type="password" id="passWord"  value={password} name="password-login" onChange={handelPasswordChange} placeholder="password"></input>
//                 <br></br>
//                 <div className="login-btn" onClick={popup}>Login</div>
               
//                 {error && <p>{error}</p>}
//             </form>

//             <div className={popupStyle}>
//                 <h3>Login Failed</h3>
//                 <p>Username or password incorrect</p>
//             </div>
//         </div>

//     )
// }
//     export default LoginForm; 
