"use client"
import { useState } from "react";

export default function Home() {
const [count , setCount]= useState(0)


  return (
    <div>
      <div i am a component >{count}</div>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
    
  );
}
