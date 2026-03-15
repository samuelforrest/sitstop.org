import Link from "next/link";
import { ImageAutoSlider } from "../ui/HeroImageSlider";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full text-center space-y-6 justify-center mb-20 md:mb-30"
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold p-4 md:p-6">
        SIT STOP
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-loose">
        Making life a little easier for those who need to sit down
      </p>

      <ImageAutoSlider />

      <div className="items-center justify-center flex gap-3 md:gap-5">
        <Link href="/locations">
          <Button className="hover:cursor-pointer md:h-11 md:w-40 bg-yellow-300 text-black">
            View all locations
          </Button>
        </Link>
        <a href="#contact">
          <Button
            variant="secondary"
            className="hover:cursor-pointer bg-gray-200 md:h-11 md:w-40"
          >
            Contact Us
          </Button>
        </a>
      </div>
    </section>
  );
}
