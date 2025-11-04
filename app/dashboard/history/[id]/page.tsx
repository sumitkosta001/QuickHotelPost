"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

const HistoryDetailPage = () => {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const params = useParams(); // useParams returns a promise-like object in new Next.js

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const id = await params?.id; // unwrap with 'await' inside async function
        const res = await axios.get(`/api/history/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (params) fetchItem();
  }, [params]);

  const handleDelete = async () => {
    try {
      const id = await params?.id;
      await axios.delete(`/api/history/${id}`);
      alert("Deleted successfully!");
      router.push("/dashboard/history");
    } catch (error) {
      alert("Failed to delete.");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-3xl mx-auto animate-pulse space-y-4">
        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-60 bg-gray-300 rounded-md"></div>
      </div>
    );
  }

  if (!item) return <div className="p-6">Not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{item.templateSlug}</h1>
      <p className="mb-2">
        <strong>Created At:</strong> {item.createdAt}
      </p>
      <p className="mb-4">
        <strong>Content:</strong> {item.aiResponse}
      </p>

      {item.generatedImage && (
        <div className="my-6">
          <Image
            src={item.generatedImage}
            alt="Generated"
            width={500}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      )}

      <button
        onClick={handleDelete}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default HistoryDetailPage;
