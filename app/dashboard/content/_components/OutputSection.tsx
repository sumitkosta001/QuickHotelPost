import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      if (editorInstance && aiOutput) {
        editorInstance.setMarkdown(aiOutput);
      }
    }
  }, [aiOutput]);

  const copyToClipboard = () => {
    if (editorRef.current) {
      const markdownText = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(markdownText);
      alert("Copied to clipboard!");
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <button
          onClick={copyToClipboard}
          className="flex gap-2 items-center px-3 py-2 border rounded-md hover:bg-gray-100"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
      </div>
      <Editor
        ref={editorRef}
        initialValue={aiOutput || "Your result will appear here"}
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
