import React,{useState} from "react";
import Navbar from "@/components/Navbar";
import Canvas from "@/components/Canvas";

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const router = useRouter()
  return (
    <div 
    className={'h-screen w-screen '+ inter.className}
    >
      <Navbar
        routetoPreview={() =>router.push('/preview') }
        editMode={true}
      />
      <Canvas
      editMode={true} />
    </div>
  );
}
