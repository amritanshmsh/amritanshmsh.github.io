import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import Section, { SubSection } from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import StatusPill from "@/components/StatusPill";
import { calculateAge } from "@/util";
import profilePicture from "../../public/logo.png";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center">
      <div className="flex w-full grow content-stretch p-2 md:p-5">
        <div className="flex grow flex-col items-center justify-center space-y-8 overflow-hidden bg-fixed bg-center p-5 md:p-0">
          <div className="flex w-full max-w-[600px] flex-col gap-y-3 rounded-lg">
            <div className="flex items-center gap-x-1">
              <Image
                alt="Profile Picture"
                className="h-[60px] w-[60px] rounded-full bg-cover md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
                priority
                src={profilePicture}
              />
            </div>

            <section className="w-full">
              <StatusPill />
              <h1 className="text-3xl font-bold">Amritansh Mishra</h1>
              <SocialLinks />
            </section>
          </div>

          <Section title="About Me">
            <SubSection>
              {`Hey there! I'm Amritansh, a self-taught designer and aspiring technical founder from India. I thrive at the intersection of creativity and code — currently exploring product design, front-end frameworks, and AI models like MoLFormer. I'm learning in public, building in the open, and documenting everything I can. Thank you for visiting my space!`}
            </SubSection>
          </Section>

          <Section title="Hobbies">
            <SubSection>
              When I'm not designing or building, I love storytelling — whether through books, films, or writing fiction. I'm especially drawn to stories that reveal paradoxes in human nature.
            </SubSection>
            <SubSection>
              I also enjoy exploring spiritual philosophy, capturing ideas in my journal, and occasionally getting lost in the worlds of thoughtful cinema like <ExternalLink href="https://www.imdb.com/title/tt2194499/">About Time</ExternalLink>.
            </SubSection>
          </Section>

          <Section title="Frameworks & Technologies">
            <SubSection>
              I design in <ExternalLink href="https://www.figma.com/">Figma</ExternalLink> and build interfaces with{" "}
              <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> and{" "}
              <ExternalLink href="https://tailwindcss.com/">Tailwind CSS</ExternalLink>. I'm learning backend development using{" "}
              <ExternalLink href="https://nestjs.com/">NestJS</ExternalLink> and{" "}
              <ExternalLink href="https://www.python.org/">Python</ExternalLink>, particularly for AI and model integration.
            </SubSection>
          </Section>

          <Section title="More About Me">
            <SubSection>
              You can find my professional background on <ExternalLink href="https://www.linkedin.com/in/amritanshmsh/">LinkedIn</ExternalLink>. I also share thoughts and deep dives on design, AI, and storytelling through my <ExternalLink href="https://medium.com/@amritanshmsh">Medium blog</ExternalLink>.
            </SubSection>
          </Section>
        </div>
      </div>
    </main>
  );
}
