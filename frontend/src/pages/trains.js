import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const TrainsPage = ({ trains }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrains = trains.filter((train) =>
    train.trainNo.includes(searchTerm)
  );

  return (
    <Layout>
      <Head>
        <title>Trains Page</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Available Trains from Mumbai to Ahmedabad</h1>
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="Search by Train No"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Train Name</th>
                <th className="px-4 py-2">Train No|Schedule</th>
                <th className="px-4 py-2">Departure Time</th>
                <th className="px-4 py-2">Arrival Time</th>
                <th className="px-4 py-2">Destination Station</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrains.map((train) => (
                <tr key={train.id}>
                  <td className="px-4 py-2">{train.trainName}</td>
                  <td className="px-4 py-2">{train.trainNo}</td>
                  <td className="px-4 py-2">{train.s_time}</td>
                  <td className="px-4 py-2">{train.d_time}</td>
                  <td className="px-4 py-2">{train.d_name}</td>
                  <td className="px-4 py-2">{train.duration}</td>
                  <td className="px-4 py-2">{train.price}</td>
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
  const trains = await prisma.trains.findMany();
  return {
    props: { trains },
  };
}

export default TrainsPage;
