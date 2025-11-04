"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { Button } from "@/components/ui/button";
import { Trash, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdAt: string;
  generatedImage: string | null;
}

function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const fetchHistory = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    setLoading(true);
    try {
      const res = await axios.get("/api/history", {
        params: {
          email: user.primaryEmailAddress.emailAddress,
        },
      });

      if (res.data.success) {
        setHistory(res.data.data);
      }
    } catch (err) {
      console.error("Error fetching history:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, [user]);

  const handleDelete = async (id: number) => {
    await axios.delete("/api/history", { params: { id } });
    fetchHistory();
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB"); // dd/mm/yyyy
  };

  if (loading) {
    return (
      <div className="p-6 space-y-4 animate-pulse w-full">
        <div className="h-8 bg-gray-300 rounded "></div>

        <div className="space-y-2 ">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between space-x-4">
              <div className="h-6 bg-gray-200 rounded w-10"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-6 bg-gray-200 rounded w-48"></div>
              <div className="h-20 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="h-6 bg-gray-200 rounded w-28"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">History</h1>

      <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-800 text-left">
            <th className="p-4 border">ID</th>
            <th className="p-4 border">Template</th>
            <th className="p-4 border">Form Data</th>
            <th className="p-4 border">Generated Image</th>
            <th className="p-4 border">Created At</th>
            <th className="p-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-4 border">{item.id}</td>
              <td className="p-4 border">{item.templateSlug}</td>
              <td className="p-4 border truncate max-w-xs">{item.formData}</td>
              <td className="p-4 border">
                {item.generatedImage ? (
                  <Image
                    src={item.generatedImage}
                    alt="Generated"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className="p-4 border">{formatDate(item.createdAt)}</td>
              <td className="p-4 border space-x-2">
                <Link href={`/dashboard/history/${item.id}`}>
                  <Button size="sm" variant="outline">
                    <Eye className="mr-2 h-4 w-4" /> View
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDelete(item.id)}
                  size="sm"
                  variant="destructive"
                >
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
