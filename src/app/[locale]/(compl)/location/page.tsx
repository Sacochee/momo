import Image from "next/image"
export default function page() {
  return (
    <div >
        <Image 
        src={"/bretagne/b1.png"}
        fill
        sizes="(max-width: 400px) 40vw,(min-width:1024px) 100vw"
        alt="blalala"
        objectFit="cover"
        />
    </div>
  )
}
