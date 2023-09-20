import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, mobile);
    try {
      const response = await axios.post('/api/users', {
        name,
        email,
        mobile,
      });

      if (response.status === 201) {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
      router.push('/');
    } catch (error) {
      console.error('API request error:', error);
      alert('Login failed');
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('/api/users');
      setFetchedUsers(response.data);
    }

    fetchUsers();
  }, []);

  const handleUpdateUser = async (userId) => {
    try {
      const response = await axios.put('/api/users', {
        id: userId,
        name,
        email,
        mobile,
      });
      setFetchedUsers((prevUsers) =>
        prevUsers.map((User) => {
          if (User.id === userId) {
            return {
              ...User,
              name,
              email,
              mobile,
            };
          }
          return User;
        })
      );
      alert('User updated successfully');
    } 
    catch (error) {
      console.error('Error updating User:', error);
      alert('Failed to update User');
    }
    router.push('/');
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete('/api/users', {
        data: { id: userId },
      });
      // setFetchedUsers(response.data);
                          // await prisma.User.delete({
                          //   where: { id: userId },
                          // });
                          // console.log(userId)
      alert('User deleted successfully');
      // Remove the deleted User
      setFetchedUsers((prevUsers) => prevUsers.filter((User) => User.id !== userId));
    } catch (error) {
      console.error('Error deleting User:', error);
      alert('Failed to delete User');
    }
    router.push('/');
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-blue-600 italic underline">Travel with Us</h1>
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
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto">
  <h1 className="text-3xl font-semibold bg-gray-700 text-center underline text-blue-400">Available Users</h1>
  <table className="table-fixed min-w-full bg-gray-700">
    <thead>
      <tr>
        <th className="w-1/4 px-4 py-2 underline">Name</th>
        <th className="w-1/4 px-4 py-2 underline">Email</th>
        <th className="w-1/4 px-4 py-2 underline">Mobile</th>
        <th className="w-1/4 px-4 py-2 underline">Actions</th>
      </tr>
    </thead>
    <tbody>
      {fetchedUsers.map((User) => (
        <tr key={User.id}>
          <td className="px-4 py-2 text-center">{User.name}</td>
          <td className="px-4 py-2 text-center">{User.email}</td>
          <td className="px-4 py-2 text-center">{User.mobile}</td>
          <td className="px-4 py-2 text-center">
            <button onClick={() => handleUpdateUser(User.id)} className="bg-amber-500 mx-2">Update</button>
            <button onClick={() => handleDeleteUser(User.id)} className="bg-pink-700 mx-2">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </Layout>
    
  );
};

export default Login;
