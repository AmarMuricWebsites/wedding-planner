import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  couple: string
  image: string
}

export default function TestimonialCard({ quote, couple, image }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:translate-y-[-5px] relative">
      <div className="absolute top-0 right-0 w-20 h-20 bg-pink-50 rounded-bl-full opacity-50 -z-10"></div>
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-pink-200">
        <Image src={image || "/placeholder.svg"} alt={couple} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-pink-300 mx-auto"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
        <p className="text-gray-700 italic">{quote}</p>
        <p className="font-medium text-pink-500">{couple}</p>
      </div>
    </div>
  )
}
