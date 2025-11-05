"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Copy, Download } from "lucide-react";
import { Facebook, Linkedin, Twitter, Instagram, Share2 } from "lucide-react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Only dynamic import EditorContent to avoid SSR issues
const EditorContent = dynamic(
  () => import("@tiptap/react").then((mod) => mod.EditorContent),
  { ssr: false }
);

interface OutputSectionProps {
  aiOutput: string;
  generatedImage: string | null;
}

export default function OutputSection({
  aiOutput,
  generatedImage,
}: OutputSectionProps) {
  const [initialized, setInitialized] = useState(false); // To avoid overwriting user edits

  const editor = useEditor({
    extensions: [StarterKit],
    content: aiOutput || "",
    editable: true,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    immediatelyRender: false, // prevent SSR issues
  });

  const [content, setContent] = useState("");

  // Initialize editor content only once when aiOutput changes
  useEffect(() => {
    if (editor && aiOutput && !initialized) {
      editor.commands.setContent(aiOutput);
      setContent(aiOutput);
      setInitialized(true);
    }
  }, [aiOutput, editor, initialized]);

  const copyText = () => navigator.clipboard.writeText(content);

  const downloadImage = () => {
    if (generatedImage) {
      const a = document.createElement("a");
      a.href = generatedImage;
      a.download = "generated-image.png";
      a.click();
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
      {/* HEADER */}
      <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-50 to-white">
        <h2 className="text-xl font-semibold text-gray-800 relative">
          Your Result
          <span className="absolute left-0 -bottom-1 w-14 h-[3px] bg-blue-600 rounded-full"></span>
        </h2>

        <div className="flex gap-3 items-center">
          <button onClick={copyText} className="action-btn" disabled={!content}>
            <Copy className="w-4 h-4" /> Copy Text
          </button>

          <button
            onClick={downloadImage}
            className="action-btn"
            disabled={!generatedImage}
          >
            <Download className="w-4 h-4" /> Download Image
          </button>
        </div>
      </div>

      {/* TIPTAP EDITOR */}
      <div className="p-4 min-h-[300px] border-b border-gray-200">
        {editor && <EditorContent editor={editor} />}
      </div>

      {/* IMAGE + SHARE SECTION */}
      <div className="p-6 border-t bg-white/60 backdrop-blur-md">
        <h3 className="font-semibold text-gray-800 mb-3 text-lg">
          Generated Image
        </h3>

        {generatedImage ? (
          <img
            src={generatedImage}
            alt="Generated"
            className="max-w-full h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          <div className="text-center text-gray-500 py-10">
            The generated image will appear here after content generation.
          </div>
        )}

        {generatedImage && (
          <div className="mt-7 space-y-4">
            <h4 className="font-medium text-gray-800 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-md"></span>
              Share this post
            </h4>

            <div className="flex gap-4 flex-wrap">
              <SocialIcon
                url={`https://www.facebook.com/sharer/sharer.php?u=${generatedImage}`}
                icon={Facebook}
                color="#1877F2"
                label="Facebook"
              />
              <SocialIcon
                url={`https://www.linkedin.com/sharing/share-offsite/?url=${generatedImage}`}
                icon={Linkedin}
                color="#0A66C2"
                label="LinkedIn"
              />
              <SocialIcon
                url={`https://twitter.com/intent/tweet?url=${generatedImage}&text=${encodeURIComponent(
                  content
                )}`}
                icon={Twitter}
                color="black"
                label="Twitter"
              />
              <SocialIcon
                url={generatedImage}
                icon={Instagram}
                color="#E1306C"
                label="Instagram (Download)"
                download
              />
              <SocialIconButton
                icon={Share2}
                label="Share (Mobile)"
                action={() =>
                  navigator.share({
                    title: "AI Generated Post",
                    text: content,
                    url: generatedImage,
                  })
                }
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              *Instagram doesn't support direct share. Download & upload
              manually.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ✅ Social Icon Components */
function SocialIcon({ url, icon: Icon, color, label, download = false }: any) {
  return (
    <a
      href={url}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn group"
      style={{ "--brand": color } as React.CSSProperties}
    >
      <Icon className="w-5 h-5" />
      <span className="tooltip">{label}</span>
    </a>
  );
}

function SocialIconButton({ icon: Icon, label, action }: any) {
  return (
    <button
      onClick={action}
      className="social-btn group"
      style={{ "--brand": "#555" } as React.CSSProperties}
    >
      <Icon className="w-5 h-5" />
      <span className="tooltip">{label}</span>
    </button>
  );
}
