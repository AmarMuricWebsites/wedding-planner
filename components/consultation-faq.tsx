import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConsultationFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-pink-100">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          Is there a fee for the consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          No, your initial 30-minute consultation is completely complimentary
          and comes with no obligation. It&apos;s our opportunity to get to know
          each other and see if we&apos;re a good fit for your wedding planning
          needs.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b border-pink-100">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          How should I prepare for my consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          We recommend thinking about your wedding vision, approximate budget,
          and guest count. If you have any inspiration photos or Pinterest
          boards, feel free to share them with us. Also, prepare any specific
          questions you have about our services or the planning process.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-pink-100">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          What happens after the consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          After our meeting, we&apos;ll send you a follow-up email with a
          summary of what we discussed and a customized proposal based on your
          needs. If you decide to move forward, we&apos;ll prepare a contract
          and collect a deposit to secure your date.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-b border-pink-100">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          Can both of us attend the consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          We encourage both partners to attend the consultation if possible.
          This ensures that we understand both of your visions and preferences
          for the wedding day.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-b border-pink-100">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          How far in advance should I book a consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          We recommend booking your consultation as soon as you&apos;re engaged,
          especially if your wedding is during peak season (May-October). For
          planning purposes, it&apos;s best to secure your wedding planner 9-12
          months before your wedding date, but we can accommodate shorter
          timelines as well.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="hover:text-pink-500 transition-colors">
          What if I need to reschedule my consultation?
        </AccordionTrigger>
        <AccordionContent className="text-gray-500">
          We understand that schedules can change. If you need to reschedule
          your consultation, please let us know at least 24 hours in advance,
          and we&apos;ll be happy to find a new time that works for you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
