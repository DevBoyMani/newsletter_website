import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileFaq() {
  const faqData = [
    {
      heading: "Can I sponsor multiple newsletters at once?",
      content:
        "Yes. Most advertisers do. We operate multiple newsletters across business, geopolitics, current affairs, movies, and city-focused audiences. You can sponsor one or bundle several depending on your campaign goals. Multi-newsletter buys often get priority placement and better pricing.",
      value: "item-1",
    },
    {
      heading: "Do you help with ad copy and design?",
      content:
        "Yes. We know our audience better than any external copywriter. We help write or refine your copy, suggest hooks, and optimize for clicks. If you don’t have creatives, we can also design a clean visual asset that matches the newsletter style.",
      value: "item-2",
    },
    {
      heading: "Can I include a tracking link or UTM parameters?",
      content:
        "Absolutely. We encourage tracking links and UTM parameters, and we can even generate them for you so you can measure performance in Google Analytics, HubSpot, or whatever dashboard you worship. After the campaign, we send a performance report that includes impressions (send count), opens, clicks, and CTR so you know exactly how your ad performed.",
      value: "item-3",
    },
    {
      heading: "Do you guarantee results?",
      content:
        "We guarantee visibility, not specific outcomes. Your brand will be placed in front of a highly engaged audience with strong attention and high intent. However, the number of clicks or conversions ultimately depends on your offer, landing page experience, and timing. We operate with transparency, not unrealistic promises.",
      value: "item-4",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full pt-10 px-4">
      {faqData.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="data-[state=open]:text-[#01261E] text-[#01261E] font-[400] text-[16px] font-[manrope] text-left">
            {item.heading}
          </AccordionTrigger>
          <AccordionContent className="text-[#12121299] text-[14px] font-[400] leading-[150%]">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
