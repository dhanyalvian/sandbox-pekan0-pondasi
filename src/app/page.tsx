"use client";
import { useState } from "react";
import { Sun, Moon } from 'lucide-react';
import LinkList from "./components/link.tsx";
import ProfilePicture from './components/pp.tsx';
import Bio from './components/bio.tsx';
import Copyright from "./components/cr.tsx";

export default function Home() {
  const [darkMode, toggleDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "bg-gray-900 text-white mx-auto min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]" : "bg-white text-gray-900 mx-auto min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]"}>
      
      <div className="absolute top-4 right-4">
        <button
          onClick={() => toggleDarkMode(!darkMode)}
          className="p-2 rounded-full bg-blue-500 text-white shadow-xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center cursor-pointer"
        >
          {darkMode
            ? <Moon size={20} className="text-yellow-300" />
            : <Sun size={20} className="text-white" />
          }
        </button>
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
