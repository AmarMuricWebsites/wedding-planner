import { Calendar, ClipboardList, Clock } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Calendar" | "ClipboardList" | "Clock"
  features: string[]
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:translate-y-[-5px] group">
      <div className="p-3 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors duration-300">
        {icon === "Calendar" && <Calendar className="h-8 w-8 text-pink-500" />}
        {icon === "ClipboardList" && <ClipboardList className="h-8 w-8 text-pink-500" />}
        {icon === "Clock" && <Clock className="h-8 w-8 text-pink-500" />}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <ul className="space-y-2 text-left w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
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
              className="h-5 w-5 text-pink-500"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
