// utils/generateImage.ts
export const generateImageClientOnly = async (prompt: string) => {
  if (!prompt) return null;

  try {
    const hfResponse = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!hfResponse.ok) {
      console.error("Server-side HuggingFace Error:", await hfResponse.text());
      return null;
    }

    const blob = await hfResponse.blob();

    // Upload image to Cloudinary as before
    const formData = new FormData();
    formData.append("file", blob, "generated-image.png");

    const uploadResponse = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadResponse.json();

    return uploadData.secure_url;
  } catch (error) {
    console.error("Error generating or uploading image:", error);
    return null;
  }
};
