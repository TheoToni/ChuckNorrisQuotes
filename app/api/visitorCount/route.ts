import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const existingRecord = await prisma.visitorCount.findFirst();
    if (existingRecord) {
      await prisma.visitorCount.update({
        where: { id: existingRecord.id },
        data: { count: { increment: 1 } },
      });
    } else {
      await prisma.visitorCount.create({
        data: { count: 1 },
      });
    }
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

export async function GET(req: Request) {
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
