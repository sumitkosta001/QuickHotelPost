"use client";
import React, { useState, useEffect } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { chatSession } from "@/utlis/AiModal";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import { ArrowLeft } from "lucide-react"; 
import Templates from "@/app/data/Templates"; 
import { useParams } from "next/navigation"

function CreateNewContent() {
  const params = useParams(); 
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  useEffect(() => {
    if (params && params["template-slug"]) {
      const foundTemplate = Templates.find((item) => item.slug === params["template-slug"]);
      setSelectedTemplate(foundTemplate);
    }
  }, [params]);

  const GenerateAIContent = async (formData: Record<string, any>) => {
    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt || "";
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result?.response.text(); // Await text extraction
      console.log("AI Response:", responseText);
      setAiOutput(responseText || "No response from AI");
    } catch (error) {
      console.error("Error generating AI content:", error);
      setAiOutput("Error generating content. Please try again.");
    }

    setLoading(false);
  };

  if (!selectedTemplate) return <p className="text-center text-gray-500">Loading template...</p>;

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
        <FormSection selectedTemplate={selectedTemplate} userFormInput={GenerateAIContent} loading={loading} />

        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
