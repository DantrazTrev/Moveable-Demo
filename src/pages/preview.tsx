import React,{useState} from "react";
import Navbar from "@/components/Navbar";
import Canvas from "@/components/Canvas";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div 
    className={'h-screen w-screen '+ inter.className}
    >
      <div className="text-black bg-blue-50">  Preview Mode </div>
      <Canvas
      editMode={false} />
    </div>
  );
}
