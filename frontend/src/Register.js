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
