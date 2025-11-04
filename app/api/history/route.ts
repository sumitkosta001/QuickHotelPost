import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const rows = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, email));

    // Convert drizzle objects to plain JSON
    const data = rows.map((r: any) => ({
      id: r.id,
      formData: r.formData,
      aiResponse: r.aiResponse,
      templateSlug: r.templateSlug,
      createdAt: r.createdAt,
      generatedImage: r.generatedImage,
    }));

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching history" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { success: false, message: "ID is required" },
      { status: 400 }
    );
  }

  try {
    await db.delete(AIOutput).where(eq(AIOutput.id, Number(id)));
    return NextResponse.json({ success: true, message: "Item deleted" });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting item" },
      { status: 500 }
    );
  }
}
