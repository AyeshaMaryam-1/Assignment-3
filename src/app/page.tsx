import Image from "next/image";

export default function Home(){
  return(
    <div>
      <Image className="home-img" src="/home-page.jpg" alt="img" width={850}height={478}
     />

      <p className="text-box">Welcome</p>
    </div>
  );
}
