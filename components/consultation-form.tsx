import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ConsultationForm() {
  return (
    <form className="space-y-5">
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
        <Label htmlFor="wedding-date">Wedding Date (Approximate)</Label>
        <Input
          id="wedding-date"
          placeholder="MM/DD/YYYY"
          type="date"
          className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label>Consultation Type</Label>
        <RadioGroup
          defaultValue="in-person"
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <Label htmlFor="in-person" className="cursor-pointer">
              In-Person
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="video" id="video" />
            <Label htmlFor="video" className="cursor-pointer">
              Video Call
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone" className="cursor-pointer">
              Phone Call
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferred-date">Preferred Date & Time</Label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            id="preferred-date"
            type="date"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          />
          <Select>
            <SelectTrigger
              id="preferred-time"
              className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
            >
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12pm-4pm)</SelectItem>
              <SelectItem value="evening">Evening (4pm-7pm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="alternate-date">Alternate Date & Time</Label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            id="alternate-date"
            type="date"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          />
          <Select>
            <SelectTrigger
              id="alternate-time"
              className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
            >
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12pm-4pm)</SelectItem>
              <SelectItem value="evening">Evening (4pm-7pm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="package-interest">Interested In</Label>
        <Select>
          <SelectTrigger
            id="package-interest"
            className="border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
          >
            <SelectValue placeholder="Select a package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full">Full Planning</SelectItem>
            <SelectItem value="partial">Partial Planning</SelectItem>
            <SelectItem value="day-of">Day-of Coordination</SelectItem>
            <SelectItem value="custom">Custom Package</SelectItem>
            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="questions">Questions or Special Requests</Label>
        <Textarea
          id="questions"
          placeholder="Let us know if you have any specific questions or requests for your consultation"
          className="min-h-[100px] border-pink-100 focus-visible:ring-pink-500 transition-all duration-300"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px]"
      >
        Request Consultation
      </Button>
    </form>
  );
}
