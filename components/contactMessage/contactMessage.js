'use client';

import { useState } from 'react';

export default function ContactMessage({ value, onChange }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      console.log('Message sent:', message); // Optional: for debugging
      setMessage(''); // Clear message after sending
    }
  };

  return (
    <div className="mt-8 group focus-within:text-[#01261E]">
      <label className="block mb-1 text-[16px] font-[500] leading-[20px] text-[#000] transition-colors group-focus-within:text-[#01261E]">
        Message
      </label>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your message here..."
        className={`w-full h-10 text-[14px] rounded-none border-b border-[#8D8D8D] p-2 focus:outline-none 
                  focus:border-[#01261E] bg-transparent resize-none 
                  focus:placeholder-transparent ${value ? 'text-[#1A1A1A]' : 'text-[#8D8D8D]'}`}
      >

      </textarea>
    </div>

  );
}
