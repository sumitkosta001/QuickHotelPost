import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request, { params }: any) {
  const { id } = await params;
  
  const result = await db.select().from(AIOutput).where(eq(AIOutput.id, Number(id))).limit(1);

  if (!result.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(result[0]);
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = await params;

  await db.delete(AIOutput).where(eq(AIOutput.id, Number(id)));

  return NextResponse.json({ message: "Deleted" });
}
