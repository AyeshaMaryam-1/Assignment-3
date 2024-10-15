import Image from "next/image";

export default function Home(){
  return(
    <div>
      <img src="/home-page.jpg" alt="img" className="home-img"/>

      <p className="text-box">Welcome</p>
    </div>
  );
}