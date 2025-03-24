"use client";

import { useState } from "react";
import { MessageSquareText, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [],
  );
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm your medical assistant. Please note that I provide general information only and not medical advice. Always consult with a healthcare professional for medical concerns.",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 sm:w-96 overflow-hidden flex flex-col transition-all duration-300 ease-in-out max-h-[500px]">
          {/* Chat header */}
          <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">MedDiagnose Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="text-white hover:bg-teal-700 h-8 w-8"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <MessageSquareText className="mx-auto h-12 w-12 text-teal-300 mb-2" />
                <p>Ask me any medical question!</p>
                <p className="text-xs mt-2">
                  Note: This is for informational purposes only.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.isUser
                          ? "bg-teal-600 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 p-4"
          >
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your medical question..."
                className="flex-1"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Send
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg flex items-center justify-center animate-pulse"
        >
          <MessageSquareText className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
