import Image from "next/image";

export default function About() {
  return (
    <div className="container"> 
      <div className="left-side">
        <h1>AYESHA MARYAM</h1>
        <h2>(Software Developer & AI Enthusiast)</h2>
        <br />
        <p>Hi, I'm Ayesha Maryam, a software developer and passionate web enthusiast, dedicated to crafting cutting-edge digital solutions and explore AI-driven solutions</p>
      </div>
      <div className="right-side">  
        <img src="/img.jpg" alt="img"/>
      </div>      
    </div>
  );
}