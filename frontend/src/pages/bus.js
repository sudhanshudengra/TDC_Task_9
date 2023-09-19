import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const BusesPage = ({ buses }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBuses = buses.filter((bus) =>
    bus.bustype.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Buses Page</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Available Buses</h1>
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="Search by Bus Type"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Bus Type</th>
                <th className="px-4 py-2">Source Station</th>
                <th className="px-4 py-2">Source Time</th>
                <th className="px-4 py-2">Destination Station</th>
                <th className="px-4 py-2">Destination Time</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredBuses.map((bus) => (
                <tr key={bus.id}>
                  <td className="px-4 py-2">{bus.buscompany}</td>
                  <td className="px-4 py-2">{bus.bustype}</td>
                  <td className="px-4 py-2">{bus.s_name}</td>
                  <td className="px-4 py-2">{bus.s_time}</td>
                  <td className="px-4 py-2">{bus.d_name}</td>
                  <td className="px-4 py-2">{bus.d_time}</td>
                  <td className="px-4 py-2">{bus.duration}</td>
                  <td className="px-4 py-2">₹{bus.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const buses = await prisma.buses.findMany();
  return {
    props: { buses },
  };
}

export default BusesPage;
