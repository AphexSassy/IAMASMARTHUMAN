import Image from "next/image"
export default function Home() {
return (
<main className="flex flex-col items-center bg-white min-h-screen py-8 px-4">
<Image src="/iamasmarthumanlogo.png" alt="logo" width={400} height={54} className="mb-8" quality={100} />
<Image src="/homelessman(2).png" alt="photo" width={800} height={1300} className="mb-6 w-full max-w-md" quality={100} unoptimized />
<a href="https://buy.stripe.com/5kQ5kDfFMd4h6Y72nt0Fi00" target="_blank" rel="noopener noreferrer" className="bg-[#d4e84a] text-sm px-4 py-1.5 font-bold" style={{color: '#2496be'}}>buy</a>
<div className="flex-1 min-h-[70px]" />
<a href="mailto:contact@iamasmarthuman.com" className="text-sm mb-6" style={{color: '#2596be'}}>contact@iamasmarthuman.com</a>
<a href="https://www.instagram.com/aphexsassy" target="_blank" rel="noopener noreferrer" className="mb-10">
<Image src="/instagramlogo.png" alt="Instagram" width={50} height={50} className="hover:opacity-80 transition-opacity" quality={100} />
</a>
</main>
  )
}