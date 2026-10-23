import OrganizationSchema from "@/components/OrganizationSchema";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Intro from "@/components/sections/Intro";
import Journey from "@/components/sections/journey/Journey";
import Partners from "@/components/sections/Partners";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      <Intro />
      <Journey />
      <WhyChooseUs />
      <Industries />
      <Partners />
      <Projects />
      <Contact />
    </>
  );
}
