'use client';
import { useState } from 'react';

export default function ContactMessage({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      console.log('Message sent:', message); // Optional: for debugging
      setMessage(''); // Clear message after sending
    }
  };

  return (
    <div className="mt-8">
      <label className="block mb-1 text-[12px] font-[500] leading-[20px] text-[#8D8D8D]">
        Message
      </label>
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        className="w-full h-10 text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E] bg-transparent resize-none"
      ></textarea>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSend}
          className="px-6 py-2 bg-[#01261E] text-white text-sm font-semibold rounded-full hover:bg-[#014134] transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
