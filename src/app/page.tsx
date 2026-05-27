import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import ExperienceUniverse from "@/components/site/ExperienceUniverse";
import WorldCupBanner from "@/components/site/WorldCupBanner";
import FeaturedPackages from "@/components/site/FeaturedPackages";
import DestinationsGrid from "@/components/site/DestinationsGrid";
import ValueProps from "@/components/site/ValueProps";
import Testimonials from "@/components/site/Testimonials";
import BlogPreview from "@/components/site/BlogPreview";
import ContactCTA from "@/components/site/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ExperienceUniverse />
      <WorldCupBanner />
      <FeaturedPackages />
      <DestinationsGrid />
      <ValueProps />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
