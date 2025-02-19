/* Here we define the API routes for the visitor count. The visitor count is stored in
 the database and can be incremented by sending a POST request to the route. The current
  count can be fetched by sending a GET request to the route. I use Prisma and their database here.*/

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST() {
  try {
    await prisma.visitorCount.upsert({
      where: { id: 1 }, // Assuming ID is always 1
      update: { count: { increment: 1 } },
      create: { id: 1, count: 1 }, // Assuming ID is always 1
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json(
      { error: "Failed to update visitor count" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const record = await prisma.visitorCount.findFirst();
    const count = record ? record.count : 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { error: "Failed to fetch visitor count" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
