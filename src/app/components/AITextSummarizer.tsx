"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const AITextSummarizer = () => {
  const { t } = useLanguage();
  const copy = t.tools.summary;
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Resume el siguiente texto: ${input}` }),
      });
      if (!res.ok) throw new Error("Demo mode");
      const data = await res.json();
      setSummary(data.result);
    } catch {
      setSummary(`Demo summary: ${input.slice(0, 140)}${input.length > 140 ? "..." : ""}`);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <p className="eyebrow">{copy.label}</p><h3>{copy.title}</h3><p className="tool-description">{copy.text}</p>
      <form onSubmit={handleSummarize} className="flex flex-col gap-3">
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring min-h-[80px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
      {summary && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <span className="font-semibold text-gray-700">{copy.result}:</span>
          <p className="text-gray-700 mt-1">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AITextSummarizer; 