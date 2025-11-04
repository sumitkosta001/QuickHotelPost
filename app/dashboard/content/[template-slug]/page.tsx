"use client";
import React, { useState, useEffect } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { chatSession } from "@/utils/AiModal";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/data/Templates";
import { useParams } from "next/navigation";
import { generateImageClientOnly } from "@/utils/generateImage";
import { SaveInDb } from "@/actions/saveAiOutput"; // ✅ Import server action
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useUser } from "@clerk/nextjs";

function CreateNewContent() {
  const params = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE>();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (params?.["template-slug"]) {
      const foundTemplate = Templates.find(
        (item) => item.slug === params["template-slug"]
      );
      setSelectedTemplate(foundTemplate);
    }
  }, [params]);

  const GenerateAIContent = async (formData: Record<string, any>) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt || "";
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    try {
      // Generate AI text content
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result?.response.text();
      setAiOutput(responseText || "No response from AI");

      // Generate Image
      const imageUrl = await generateImageClientOnly(
        responseText || FinalAIPrompt
      );
      setGeneratedImage(imageUrl);

      // Save in database using server action
      await SaveInDb({
        formData,
        slug: selectedTemplate?.slug!,
        aiResp: responseText!,
        imgUrl: imageUrl,
        createdBy: user?.primaryEmailAddress?.emailAddress || "anonymous",
      });
    } catch (error) {
      console.error("Error generating content:", error);
      setAiOutput("Error generating content. Please try again.");
    }

    setLoading(false);
  };

  if (!selectedTemplate)
    return <p className="text-center text-gray-500">Loading template...</p>;

  return (
    <div className="p-10">
      <Link href="/dashboard" passHref>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center px-5 py-2 font-semibold rounded-full border border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </motion.button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />

        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} generatedImage={generatedImage} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
