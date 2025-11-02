"use client";

import React, { useRef, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { Copy } from "lucide-react";

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

interface OutputSectionProps {
  aiOutput: string;
  generatedImage: string | null;
}

function OutputSection({ aiOutput, generatedImage }: OutputSectionProps) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      editorRef.current.getInstance().setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <button
          onClick={() => {
            if (aiOutput) {
              navigator.clipboard.writeText(aiOutput);
              alert("Copied to clipboard!");
            }
          }}
          className="flex gap-2 items-center px-3 py-2 border rounded-md hover:bg-gray-100"
          disabled={!aiOutput}
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Generated content will appear here..."
        initialEditType="markdown"
        height="300px"
        useCommandShortcut={true}
        previewStyle="tab"
      />

      <div className="p-5 border-t">
        <h3 className="font-medium mb-4">Generated Image</h3>
        {generatedImage ? (
          <img
            src={generatedImage}
            alt="Generated"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        ) : (
          <div className="text-center text-gray-500 py-10">
            The generated image will appear here after content generation.
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputSection;
