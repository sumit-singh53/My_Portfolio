import React, { useState } from 'react';
import { useRouter } from 'next/router';

const InputSection = () => {
  const [inputValue, setInputValue] = useState('Create a collection of works for portfolio');
  const router = useRouter();

  const handleGenerate = () => {
    if (inputValue.trim()) {
      router.push(`/projects?search=${encodeURIComponent(inputValue.trim())}`);
    } else {
      router.push('/projects');
    }
  };

  const handleCancel = () => {
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="flex items-center gap-4 mt-8">
      <input
        type="text"
        className="design-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
      {/* Three dots menu */}
      <div className="flex items-center gap-1">
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>
      
      <button
        className="design-button cancel-btn"
        onClick={handleCancel}
      >
        Cancel
      </button>
      
      <button
        className="design-button generate-btn flex items-center gap-2"
        onClick={handleGenerate}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
        Generate
      </button>
    </div>
  );
};

export default InputSection;