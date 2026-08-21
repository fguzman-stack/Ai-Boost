"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const AIChatbot = () => {
  const { t } = useLanguage();
  const copy = t.tools.chat;
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { role: "user", content: input }]);
    setLoading(true);
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      if (!res.ok) throw new Error("Demo mode");
      const data = await res.json();
      setMessages((msgs) => [...msgs, { role: "assistant", content: data.result }]);
    } catch {
      setMessages((msgs) => [...msgs, { role: "assistant", content: `Demo response: ${input}` }]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 mt-8">
      <p className="eyebrow">{copy.label}</p><h3>{copy.title}</h3><p className="tool-description">{copy.text}</p>
      <div className="h-48 overflow-y-auto border rounded p-2 mb-4 bg-gray-50">
        {messages.length === 0 && <p className="text-gray-400">{copy.empty}</p>}
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
              {msg.role === "user" ? `${copy.you}: ` : `${copy.ai}: `}
            </span>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
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
          {loading ? "..." : copy.send}
        </button>
      </form>
    </div>
  );
};

export default AIChatbot; 