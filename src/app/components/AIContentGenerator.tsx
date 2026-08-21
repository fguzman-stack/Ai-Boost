"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const AIContentGenerator = () => {
  const { t } = useLanguage();
  const copy = t.tools.content;
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Genera un borrador de blog o FAQ sobre: ${topic}` }),
      });
      if (!res.ok) throw new Error("Demo mode");
      const data = await res.json();
      setResult(data.result);
    } catch {
      setResult(`Demo draft: A practical introduction to ${topic}, with clear steps and useful takeaways.`);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <p className="eyebrow">{copy.label}</p><h3>{copy.title}</h3><p className="tool-description">{copy.text}</p>
      <form onSubmit={handleGenerate} className="flex flex-col gap-3">
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
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
      {result && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <span className="font-semibold text-gray-700">{copy.result}:</span>
          <p className="text-gray-700 mt-1 whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
};

export default AIContentGenerator; 