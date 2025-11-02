// utils/generateImage.ts
export const generateImageClientOnly = async (prompt: string) => {
  if (!prompt) return null;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      console.error("HuggingFace Error:", await response.text());
      return null;
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob); // Create URL for preview
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
