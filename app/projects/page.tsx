import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import HighlightSection from "./components/Highlight";
import OtherProjectsSection from "./components/Project";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Image from "next/image";

const projectFeatures = [
  { image: "/images/Personal.png", title: "Portfolio Website", description: "Responsive portfolio with theme switching, motion effects, project showcases, and direct email contact." },
  { image: "/images/Personal1.png", title: "Zaika Hubb", description: "Responsive food ordering platform built with React.js and dynamic food listings.", liveUrl: "https://zaikahubb.netlify.app/" },
  { image: "/images/Personal2.png", title: "Hyderabad AC Services", description: "React booking website with dynamic service pages, forms, and interactive navigation.", liveUrl: "https://hyderabad-ac-services-sooty.vercel.app/" },
];

export default function ProjectPage() {
  return (
    <PageLayout>
      <div className="text-foreground">
        <SectionHeader subtitle="LIST OF" title="PROJECTS" />
        
        <div className="w-full flex flex-col items-center justify-center text-center mt-12 mb-4 px-4">
          <GradientText className="text-heading-xl">
            HIGHLIGHT
          </GradientText>
          <span className="text-body-lg font-semibold">
            ONE OF THE BEST PROJECTS I EVER DONE
          </span>
        </div>
        <HighlightSection />

        <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <GradientText className="text-heading-xl">
              FEATURE SHOWCASE
            </GradientText>
            <span className="text-body-lg font-semibold">
              PROJECT-BASED CAPABILITIES
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectFeatures.map(({ image, title, description, liveUrl }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-3xl border border-white/50 bg-background/80 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-card/80"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-bold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 flex w-full flex-col items-center justify-center px-4 text-center mb-8">
          <GradientText className="text-heading-xl">
              OTHER PROJECTS
          </GradientText>
          <span className="text-body-lg font-semibold">
              OTHER NOTEWORTHY PROJECTS
          </span> 
        </div>
        <OtherProjectsSection />
      </div>
    </PageLayout>
  );
}
