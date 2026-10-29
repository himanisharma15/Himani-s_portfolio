import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import ScrollReveal from "@/components/about/ScrollReveal";
import TiltedCard from "@/components/ui/animation/TiltedCard";
import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full pt-24"
    >
      <div className="relative z-10 mx-auto flex-col text-foreground dark:text-white">
        <SectionHeader
          subtitle="INTRODUCTION"
          title="PROFILE"
          className="introduction-header"
        />

        <div className="w-full flex flex-col items-center justify-center text-center mt-12 mb-8">
          <GradientText className="text-heading-xl">
            Hi, I&apos;m Himani Sharma
          </GradientText>
        </div>

        {/* Layout disatukan untuk mobile dan desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 gap-8 md:gap-12 mb-20">
          
          {/* Teks dan Tombol */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <ScrollReveal
              baseRotation={0}
              enableBlur={false}
              wordAnimationStart="top 75%"
              wordAnimationEndTrigger=".introduction-header"
              wordAnimationEnd={() => {
                const header = document.querySelector("nav");
                return `top ${header?.getBoundingClientRect().height ?? 0}px`;
              }}
            >
              I am an aspiring MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, and MongoDB. I enjoy building responsive and user-friendly web applications and working on real-world projects. I have experience integrating REST APIs, handling forms, implementing CRUD operations, and using Git and GitHub for version control. I am passionate about full-stack development and continuously improving my problem-solving skills.
            </ScrollReveal>
            <div className="mt-6">
              <Link href="/profile">
                <MagneticEffect>
                  <Button variant="secondary">Get to know me</Button>
                </MagneticEffect>
              </Link>
            </div>
          </div>

          {/* Gambar */}
          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
            <TiltedCard
              imageSrc="/images.png"
              altText="Himani Sharma"
              captionText="Stop staring at me!"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
