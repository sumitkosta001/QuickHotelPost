"use server";

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

interface SaveAiOutputParams {
  formData: any;
  slug: string;
  aiResp: string;
  imgUrl: string | null;
  createdBy: string;
}

export async function SaveInDb({
  formData,
  slug,
  aiResp,
  imgUrl,
  createdBy,
}: SaveAiOutputParams) {
  try {
    const formattedDate = new Date().toLocaleDateString("en-GB"); // Format: dd/mm/yyyy

    await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      aiResponse: aiResp,
      templateSlug: slug,
      createdBy,
      createdAt: formattedDate,
      generatedImage: imgUrl || "",
    });

    // ✅ Just sending a simple object back to client
    return { success: true };
  } catch (error) {
    console.error("❌ Error saving DB:", error);
    return { success: false };
  }
}
