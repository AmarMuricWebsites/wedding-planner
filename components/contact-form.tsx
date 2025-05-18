import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            id="first-name"
            placeholder="Enter your first name"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            id="last-name"
            placeholder="Enter your last name"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          type="tel"
          className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="wedding-date">Wedding Date</Label>
        <Input
          id="wedding-date"
          placeholder="MM/DD/YYYY"
          type="date"
          className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="package">Interested In</Label>
        <Select>
          <SelectTrigger
            id="package"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          >
            <SelectValue placeholder="Select a package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full">Full Planning</SelectItem>
            <SelectItem value="partial">Partial Planning</SelectItem>
            <SelectItem value="day-of">Day-of Coordination</SelectItem>
            <SelectItem value="custom">Custom Package</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your wedding vision"
          className="min-h-[120px] border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px]"
      >
        Send Message
      </Button>
    </form>
  )
}
