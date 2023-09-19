
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch users
    const users = await prisma.User.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    // Create a new user
    const { name, email, mobile } = req.body;
    const newUser = await prisma.User.create({
      data: { name, email, mobile },
    });
    res.status(201).json(newUser);
  } else {
    res.status(405).end(); // Method not allowed
  }
}
