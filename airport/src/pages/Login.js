import { useState } from 'react';
// import prisma from '../lib/prisma';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await prisma.User.create({
        data: {
          name,
          email,
          mobile,
        },
      });
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-blue-600">Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-2 border rounded text-black"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
