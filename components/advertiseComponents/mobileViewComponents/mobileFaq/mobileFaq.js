import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function MobileFaq() {
    const faqData = [
      {
        heading: "Recruitment team chat",
        content:
          "Absolutely, we cater to clients from different time zones and have worked with clients from almost every continent (just not Antarctica - still working on that!).",
        value: "item-1",
      },
      {
        heading: "Team member interview",
        content:
          "Help your new team understand your field of knowledge. At White Widget, we understand the importance of synchronization in our project workflow, regardless of geographical boundaries. Once a project kicks off, our team diligently works to identify and establish overlapping working hours that suit both our client and our team.",
        value: "item-2",
      },
      {
        heading: "Technical exercise",
        content:
          "Put your skills to the test and show us how you shine. At White Widget, we understand the importance of synchronization in our project workflow, regardless of geographical boundaries. Once a project kicks off, our team diligently works to identify and establish overlapping working hours that suit both our client and our team. This approach ensures that communication remains seamless and efficient collaboration is maintained throughout the duration of the project.",
        value: "item-3",
      },
      {
        heading: "Leadership chat",
        content:
          "Help us get to know you beyond your CV. Absolutely, we cater to clients from different time zones and have worked with clients from almost every continent",
        value: "item-4",
      },
      {
        heading: "Offer time",
        content:
          "You're now just a signature away from joining the greatest team. This approach ensures that communication remains seamless and efficient collaboration is maintained throughout the duration of the project.",
        value: "item-5",
      },
    ];
  
    return (
      <Accordion type="single" collapsible className="w-full pt-10">
        {faqData.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.heading}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  