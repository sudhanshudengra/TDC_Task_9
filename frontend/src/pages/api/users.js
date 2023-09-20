import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.User.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    // Create
    const { name, email, mobile } = req.body;
    const newUser = await prisma.User.create({
      data: { name, email, mobile },
    });
    res.status(201).json(newUser);
  } else if (req.method === 'PUT') {
    // Update a user
    const { id, name, email, mobile } = req.body;
    const updatedUser = await prisma.User.update({
      where: { id },
      data: { name, email, mobile },
    });
    res.json(updatedUser);
  } else if (req.method === 'DELETE') {
    // Delete a user
    const { id } = req.body;
    await prisma.User.delete({
      where: { id },
    });
    res.status(204).end(); 
  } else {
    res.status(405).end(); 
  }
}
