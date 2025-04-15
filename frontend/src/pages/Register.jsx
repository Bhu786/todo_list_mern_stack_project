// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', form);
//       alert('Registered!');
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
//       <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Email" name="email" onChange={handleChange} required />
        <Input label="Username" name="username" onChange={handleChange} required />
        <Input label="Password" type="password" name="password" onChange={handleChange} required />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
