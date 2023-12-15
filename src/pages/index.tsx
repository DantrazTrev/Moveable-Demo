import React,{useState} from "react";
import Navbar from "@/components/Navbar";
import Canvas from "@/components/Canvas";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [editMode, setEditMode] = useState(true);
  return (
    <div 
    className={'h-screen w-screen '+ inter.className}
    >
      <Navbar
        toggleEditor={() => setEditMode(!editMode)}
        editMode={editMode}
      />
      <Canvas
      editMode={editMode} />
    </div>
  );
}
