import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CabsPage = ({ cabs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCabs = cabs.filter((cab) =>
    cab.cabCar.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Cabs Page</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Available Cabs</h1>
        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="Search by Cab Car"
            className="w-full px-4 py-2 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Cab Car</th>
                <th className="px-4 py-2">Cab Facilities</th>
                <th className="px-4 py-2">Price Range</th>
              </tr>
            </thead>
            <tbody>
              {filteredCabs.map((cab) => (
                <tr key={cab.id}>
                  <td className="px-4 py-2">{cab.cabCar}</td>
                  <td className="px-4 py-2">{cab.cabFacilities}</td>
                  <td className="px-4 py-2">{cab.cabPrice}</td>
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
  const cabs = await prisma.cabs.findMany();
  return {
    props: { cabs },
  };
}

export default CabsPage;
