"use client";
import React, { useState, useEffect } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { chatSession } from "@/utils/AiModal";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/data/Templates";
import { useParams } from "next/navigation";
import { generateImageClientOnly } from "@/utils/generateImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function CreateNewContent() {
  const params = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE>();
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

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
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result?.response.text();
      setAiOutput(responseText || "No response from AI");

      const imageUrl = await generateImageClientOnly(
        responseText || FinalAIPrompt
      );
      setGeneratedImage(imageUrl);
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
        <Button asChild className="bg-primary">
          <span className="flex items-center">
            <ArrowLeft className="mr-2" /> Back
          </span>
        </Button>
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
