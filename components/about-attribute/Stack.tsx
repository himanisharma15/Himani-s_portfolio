import type { ReactNode } from "react";
import { LuChevronDown as ChevronDown } from "react-icons/lu";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostman,
  SiPython,
  SiReact,
  SiBootstrap,
  SiRender,
  SiVercel,
} from "react-icons/si";

type Skill = {
  icon: ReactNode;
  name: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming Languages",
    description: "Languages used for web development and problem solving.",
    skills: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPython />, name: "Python" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Responsive and user-friendly web interfaces.",
    skills: [
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side applications and API development.",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiOpenapiinitiative />, name: "REST APIs" },
    ],
  },
  {
    title: "Database",
    description: "Database technology for full-stack applications.",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    title: "React & JavaScript",
    description: "Core concepts used to build interactive applications.",
    skills: [
      { icon: <SiReact />, name: "Components" },
      { icon: <SiReact />, name: "Props" },
      { icon: <SiReact />, name: "State" },
      { icon: <SiReact />, name: "Hooks" },
      { icon: <SiJavascript />, name: "ES6" },
      { icon: <SiJavascript />, name: "DOM" },
      { icon: <SiJavascript />, name: "Async/Await" },
      { icon: <SiJavascript />, name: "Fetch" },
    ],
  },
  {
    title: "Version Control & Deployment",
    description: "Tools for version control and deploying applications.",
    skills: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiRender />, name: "Render" },
    ],
  },
  {
    title: "Tools",
    description: "Tools used for development and API testing.",
    skills: [
      { icon: <SiJavascript />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
    ],
  },
];

export default function SkillCardStack() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-10 sm:px-6 sm:pb-32 sm:pt-14 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <details
            key={group.title}
            name="tech-stack-accordion"
            className="group h-full overflow-hidden rounded-2xl border border-border bg-card/80 text-foreground shadow-sm transition-colors open:border-primary/50"
          >
            <summary className="flex h-28 cursor-pointer list-none items-center justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0">
                <span className="block break-words font-display text-lg font-bold tracking-[-0.03em]">{group.title}</span>
                <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">{group.description}</span>
              </span>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="border-t border-border/70 p-4">
              <div className="flex flex-wrap items-center gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="group/chip inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="text-primary group-hover/chip:text-primary-foreground">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
