import { Mail } from "lucide-react";
import { SlSocialFacebook } from "react-icons/sl";

export function ContactSection() {
  return (
    <section id="contact" className="w-full mb-20 md:mb-30">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">
        Contact Us
      </h2>

      <hr className="w-full mb-8 border-t-2"></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3 text-lg md:text-xl">
            <Mail className="w-6 h-6" />
            <span className="font-bold">Email</span>
          </div>
          <a
            href="mailto:sitstop@gmail.com"
            className="text-blue-600 hover:underline text-base md:text-lg leading-loose"
          >
            sitstop@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3 text-lg md:text-xl">
            <SlSocialFacebook className="w-6 h-6" />
            <span className="font-bold">Facebook</span>
          </div>
          <a
            href="tel:+447789438246"
            className="text-blue-600 hover:underline text-base md:text-lg leading-loose"
          >
            www.facebook.com/groups/SITSTOP/
          </a>
        </div>
      </div>
    </section>
  );
}
