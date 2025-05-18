import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How far in advance should I book a wedding planner?</AccordionTrigger>
        <AccordionContent>
          We recommend booking your wedding planner as soon as you're engaged, especially if you're planning a wedding
          during peak season (May-October). For full planning services, 9-12 months is ideal, but we can accommodate
          shorter timelines for partial planning and day-of coordination.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What's the difference between full planning and day-of coordination?</AccordionTrigger>
        <AccordionContent>
          Full planning includes comprehensive assistance from engagement to honeymoon, including vendor selection,
          budget management, design concepts, and timeline creation. Day-of coordination focuses on executing your
          already-made plans on the wedding day, including vendor coordination, ceremony rehearsal, and timeline
          management.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you travel for destination weddings?</AccordionTrigger>
        <AccordionContent>
          Yes! We love planning destination weddings and have experience coordinating events across the country and
          internationally. Travel fees apply and vary based on location.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How do payments work?</AccordionTrigger>
        <AccordionContent>
          We require a 50% deposit to secure your date, with the remaining balance due 30 days before your wedding. We
          offer payment plans for full planning packages. All payments can be made via credit card, bank transfer, or
          check.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can you work with my budget?</AccordionTrigger>
        <AccordionContent>
          We work with a variety of budgets and can customize our services to fit your needs. During our initial
          consultation, we'll discuss your budget constraints and create a plan that maximizes your investment while
          delivering the wedding of your dreams.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Do you offer custom packages?</AccordionTrigger>
        <AccordionContent>
          Yes, we understand that every couple's needs are unique. We're happy to create a custom package tailored
          specifically to your requirements and budget. Contact us to discuss your vision, and we'll design a package
          just for you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
