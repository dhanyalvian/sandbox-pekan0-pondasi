"use client";

import { useState } from "react";
import LinkList from "./components/link.tsx";
import ProfilePicture from './components/pp.tsx';
import Bio from './components/bio.tsx';
import Copyright from "./components/cr.tsx";

export default function Home() {
  const [darkMode, toggleDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "bg-gray-900 text-white mx-auto min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]" : "bg-white text-gray-900 mx-auto min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]"}>
      <div className="absolute top-5 right-5">
        <label className="flex items-center cursor-pointer space-x-1">
          <span className="text-xl">{darkMode ? "🌙" : "☀️"}</span>
          <div className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => toggleDarkMode(!darkMode)}
            />
            <div className={`w-full h-full rounded-full transition ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`} />
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-6' : ''}`} />
          </div>
        </label>
      </div>
      
      <main className="flex flex-col row-start-2 justify-center items-center">
        <ProfilePicture />
        
        <Bio />
        
        <LinkList />
        
        <Copyright />
      </main>
    </div>
  );
}
