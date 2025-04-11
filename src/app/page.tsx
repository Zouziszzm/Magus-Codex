// app/page.tsx
'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-primary p-8">
      <h1 className="text-3xl font-bold mb-4">Next.js Dark Mode Example</h1>
      <p>
        The current theme is <strong>{theme}</strong>.
      </p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
