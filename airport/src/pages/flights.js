import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FlightsPage = ({ flights }) => {
  const [searchTerm, setSearchTerm] = useState('');

 const filteredFlights = flights.filter((flight) =>
  flight.flightcode.toString().includes(searchTerm.toString())
);

  return (
    <Layout>
      <Head>
        <title>Flights Page</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Available Flights from Mumbai to Ahmedabad</h1>
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="Search by Flight Code"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Company Logo</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Flight Code</th>
                <th className="px-4 py-2">Departure Time</th>
                <th className="px-4 py-2">Arrival Time</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredFlights.map((flight) => (
                <tr key={flight.id}>
                  <td className="px-4 py-2">
                    <img src={flight.flightcompanylogo} alt={`${flight.flightcompany} Logo`} className="w-12 h-12" />
                  </td>
                  <td className="px-4 py-2">{flight.flightcompany}</td>
                  <td className="px-4 py-2">{flight.flightcode}</td>
                  <td className="px-4 py-2">{flight.s_time.toLocaleString()}</td>
                  <td className="px-4 py-2">{flight.d_time.toLocaleString()}</td>
                  <td className="px-4 py-2">{flight.duration}</td>
                  <td className="px-4 py-2">{flight.price}</td>
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
  const flights = await prisma.flights.findMany();
  return {
    props: { flights },
  };
}

export default FlightsPage;
