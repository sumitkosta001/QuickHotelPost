import React, { useState } from "react";
import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";
import { Loader2, ArrowRight } from "lucide-react";

interface TemplateCardProps {
  item: TEMPLATE;
}

function TemplateCard({ item }: TemplateCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative group">
      {isLoading && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center rounded-xl z-10">
          <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
        </div>
      )}

      <Link href={`/dashboard/content/${item?.slug}`} onClick={handleCardClick}>
        <div
          className={`relative p-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:border-transparent group-hover:-translate-y-1 ${
            isLoading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {/* Soft glowing gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-0 group-hover:opacity-80 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-inner group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={38}
                  height={38}
                />
              </div>
              <h2 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                {item.name}
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-all duration-300">
              {item.desc}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
                Explore
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TemplateCard;
