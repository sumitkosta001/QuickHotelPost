// app/api/generate-image/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev", // Updated route
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.error("HuggingFace error:", error);
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
  }
}
