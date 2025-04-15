// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', form);
//       alert('Login successful');
//       localStorage.setItem('token', res.data.token);
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;



// //  2nd wala 
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";

// const Login = () => {
//   const [form, setForm] = useState({ identifier: "", password: "" });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/login", form);
//       login(res.data);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10  ">
//         <h1 className="text-3xl font-bold text-red-500  ">Hello Todo</h1>

//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <Input label="Email or Username" name="identifier" onChange={handleChange} required />
//         <Input label="Password" type="password" name="password" onChange={handleChange} required />
//         <Button type="submit">Login</Button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";
// import Register from "./Register";

// const Login = () => {
//   const [form, setForm] = useState({ identifier: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post("/api/auth/login", form);

//       if (!res.data || !res.data.token) {
//         throw new Error("Invalid response from server. Token not found.");
//       }

//       login(res.data); // context method to store token or user info
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Login error:", err);
//       const message =
//         err?.response?.data?.message || "Login failed. Please try again.";
//       alert(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-3xl font-bold text-red-500">Hello Todo</h1>
//       <Register/>
//       <h2 className="text-2xl font-bold mb-4">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <Input
//           label="Email or Username"
//           name="identifier"
//           onChange={handleChange}
//           required
//         />
//         <Input
//           label="Password"
//           type="password"
//           name="password"
//           onChange={handleChange}
//           required
//         />
//         <Button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Register from "./Register";

const Login = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // 👈 toggle register view
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/login", form);

      if (!res.data || !res.data.token) {
        throw new Error("Invalid response from server. Token not found.");
      }

      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      const message =
        err?.response?.data?.message || "Login failed. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Hello Todo</h1>

      {showRegister ? (
        <>
          <Register />
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <button
              onClick={() => setShowRegister(false)}
              className="text-blue-500 underline"
            >
              Login here
            </button>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email or Username"
              name="identifier"
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <button
              onClick={() => setShowRegister(true)}
              className="text-blue-500 underline"
            >
              Register here
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
