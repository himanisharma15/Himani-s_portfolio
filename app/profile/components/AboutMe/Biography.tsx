import React, { useState } from "react";
import { Button } from "@/components/ui/button/Button";
import { LuArrowRight as ArrowRightIcon, LuMinus as MinusIcon } from "react-icons/lu";
import MagneticEffect from "@/components/ui/button/MagneticEffect";

export default function StoryOfMyLife() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className=" flex items-center justify-center px-4">
      <div className="max-w-[1200px] ">
        <p className="text-justify text-lg leading-relaxed">
          Hi, I&apos;m <span className="text-primary text-lg">Himani Sharma</span>, a 3rd-year BCA student at <span className="text-primary text-lg">Eternal University, Baru Sahib</span>, from Himachal Pradesh. I am an aspiring <span className="text-primary text-lg">MERN Stack Developer</span> with a strong interest in building modern and user-friendly web applications.
        </p>

        {expanded && (
          <div className="text-justify text-lg mt-4 space-y-4">
            <p>
              I have hands-on experience with <span className="text-primary text-lg">HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</span>. During my frontend internship, I worked on real-world web development projects and gained experience in creating responsive interfaces and working with development teams.
            </p>
            <p>
              I enjoy learning new technologies, solving programming problems, and turning ideas into functional web applications. My goal is to grow as a full-stack developer and build applications that solve real-world problems.
            </p>
          </div>
        )}

        <div className="flex items-center justify-center mt-8">
          <MagneticEffect>
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  Hide Article <MinusIcon className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </MagneticEffect>
        </div>
      </div>
    </section>
  );
}
