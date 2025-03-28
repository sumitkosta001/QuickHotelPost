"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (data: Record<string, any>) => void; // Ensure it's a function
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Pre-fill default values if available
  useEffect(() => {
    if (selectedTemplate?.form) {
      const defaultValues = selectedTemplate.form.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {} as Record<string, any>);
      setFormData(defaultValues);
    }
  }, [selectedTemplate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-2">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {(selectedTemplate?.form || []).map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <input
                name={item.name}
                required={item?.required}
                value={formData[item.name] || ""}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            ) : item.field === "textarea" ? (
              <textarea
                name={item.name}
                required={item?.required}
                value={formData[item.name] || ""}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            ) : null}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full py-3 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md flex items-center justify-center"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
