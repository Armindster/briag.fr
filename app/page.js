import React from "react";
import Sidebar from "@components/Sidebar";


export default function Home() {
  return (
    <main className="flex flex-row min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex-1 flex-col min-h-full bg-gradient-to-b from-cyan-500 to-black">
        <h1 className="text-6xl font-bold">Hello World!</h1>
        <p className="text-xl">Welcome to my website</p>
      </div>
    </main>
  );
}
