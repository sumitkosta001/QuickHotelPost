"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Loader2Icon } from "lucide-react";
import { motion } from "framer-motion";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (data: Record<string, any>) => void;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (selectedTemplate?.form) { 
      const defaultValues = selectedTemplate.form.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {} as Record<string, any>);
      setFormData(defaultValues);
    }
  }, [selectedTemplate]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <motion.div
      className="p-6 shadow-2xl rounded-2xl backdrop-blur-lg bg-white/60 border border-white/30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate.icon}
          alt="icon"
          width={70}
          height={70}
          className="mb-4"
        />
      )}
      <h2 className="font-bold text-3xl mb-2 text-gray-800">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-base">{selectedTemplate?.desc}</p>

      <form className="mt-6 space-y-6" onSubmit={onSubmit}>
        {(selectedTemplate?.form || []).map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {item.field === "input" ? (
              <div className="floating-input">
                <input
                  name={item.name}
                  required={item?.required}
                  value={formData[item.name] || ""}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-3 bg-transparent border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500 transition-all"
                />
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all">
                  {item.label}
                </label>
              </div>
            ) : item.field === "textarea" ? (
              <div className="floating-input">
                <textarea
                  name={item.name}
                  required={item?.required}
                  value={formData[item.name] || ""}
                  onChange={handleInputChange}
                  rows={4}
                  className="block w-full px-3 py-3 bg-transparent border-b-2 border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500 transition-all resize-none"
                ></textarea>
                <label className="absolute left-3 top-3 text-gray-500 pointer-events-none transition-all">
                  {item.label}
                </label>
              </div>
            ) : null}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          disabled={loading}
          className="relative w-full py-4 rounded-lg text-white font-semibold text-lg tracking-wide shadow-lg overflow-hidden flex items-center justify-center gap-2"
          initial={{ scale: 1 }}
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(90deg, #4f46e5, #9333ea, #ec4899)",
                "linear-gradient(90deg, #ec4899, #4f46e5, #9333ea)",
                "linear-gradient(90deg, #9333ea, #ec4899, #4f46e5)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-lg opacity-80"
          ></motion.div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-lg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: loading ? 0 : 0.4 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(236, 72, 153, 0.5)" }}
          ></motion.div>

          {/* Button Content */}
          {loading ? (
            <Loader2Icon className="animate-spin w-6 h-6 relative z-10" />
          ) : (
            <motion.span
              className="relative z-10 flex items-center gap-2"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-xl"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀
              </motion.span>
              Generate Content
            </motion.span>
          )}
        </motion.button>
      </form>

      <style jsx>{`
        .floating-input input:focus + label,
        .floating-input textarea:focus + label,
        .floating-input input:not(:placeholder-shown) + label,
        .floating-input textarea:not(:placeholder-shown) + label {
          top: -0.75rem;
          font-size: 0.85rem;
          color: #6366f1;
        }
      `}</style>
    </motion.div>
  );
}

export default FormSection;
