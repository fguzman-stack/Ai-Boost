"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const AIImageGenerator = () => {
  const { t } = useLanguage();
  const copy = t.tools.image;
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/stability_ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error("Demo mode");
      const data = await res.json();
      setImage(data.result);
    } catch {
      setImage(`Demo image prompt: ${prompt}`);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <p className="eyebrow">{copy.label}</p><h3>{copy.title}</h3><p className="tool-description">{copy.text}</p>
      <form onSubmit={handleGenerate} className="flex flex-col gap-3">
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={copy.placeholder}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? copy.loading : copy.action}
        </button>
      </form>
      {image && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <span className="font-semibold text-gray-700">{copy.result}:</span>
          <p className="text-gray-700 mt-1 whitespace-pre-line">{image}</p>
        </div>
      )}
    </div>
  );
};

export default AIImageGenerator; 