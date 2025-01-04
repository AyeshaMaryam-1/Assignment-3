import Image from "next/image";

export default function Portfolio(){
    return(
        <div>
            <Image src="/portfolio.jpg" alt="img" className="portfolio-pic" width={660} height={926}/>
        </div>
    )
}
