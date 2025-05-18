import Image from "next/image";

interface ConsultationTestimonialProps {
  quote: string;
  couple: string;
  image: string;
}

export default function ConsultationTestimonial({
  quote,
  couple,
  image,
}: ConsultationTestimonialProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-pink-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={couple}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-700 text-sm italic">&quot;{quote}&quot;</p>
        <p className="font-medium text-pink-500 text-sm">{couple}</p>
      </div>
    </div>
  );
}
