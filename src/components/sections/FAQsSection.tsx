import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQsSection() {
  return (
    <section id="faqs" className="w-full mb-20 md:mb-30">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <hr className="w-full mb-8 border-t-2"></hr>
      <Accordion
        type="single"
        collapsible
        className="w-full mt-10"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            If my business joins the SIT STOP campaign do we have to provide a
            special/designated chair?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              No - any chair in the part of your business that is open to the
              public is fine. Equally, if a chair is willingly provided on
              request, that is an acceptable alternative.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            Can I designate a particular chair if I wish to?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              Yes, we would be delighted to supply a <b>SIT STOP</b> sticker for
              the chair if you wish. Please do contact us to order your sticker.
              Details are on the contacts page.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            Is there a particular type of chair which is best for SIT
            STOP&apos;s purpose?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              Yes, a chair which has a relatively high seat and ideally arms is
              the easiest for most people with mobility problems to use. However
              any stable chair is welcome to someone who needs to sit down.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            What do I do if someone abuses our hospitality by behaving
            anti-socially?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              Any premises open to the public will from time to time have
              incidents of this type. Evidence from our pilot project is that
              participating in <b>SIT STOP</b> does not increase the frequency
              of such events. When they occur they should be addressed by staff
              in the way they have been trained.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            Am I required to provide additional first aid training to staff
            because I participate in Sit Stop?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              No, there is no incremental obligation beyond that which your
              business already has.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            I know of a business which provides seating but they are not SIT
            STOP participants. Should I say something to them?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>
              We would be very pleased to know of public spirited businesses
              such as these! Displaying the <b>SIT STOP</b> logo helps the
              public, builds awareness of <b>SIT STOP</b> and assists
              recruitment of additional participant businesses.
            </p>
            <p>
              By all means approach them to display the logo and put us in touch
              with them by giving us the name and address of the business and
              the name of the person you spoke to. Alternatively if you would
              like us to approach them just send us the details.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
          <AccordionTrigger className="text-sm md:text-xl cursor-pointer">
            If I want to make a donation in support of SIT STOP what should I
            do?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-xl leading-loose">
            <p>Please contact us using the email address below.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
