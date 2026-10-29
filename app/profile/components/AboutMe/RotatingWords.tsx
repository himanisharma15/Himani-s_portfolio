const strengths = [
  { number: "01", title: "FRONTEND", description: "Building responsive and interactive interfaces with React.js." },
  { number: "02", title: "BACKEND", description: "Working with Node.js, Express.js, MongoDB, and REST APIs." },
  { number: "03", title: "LEARNING", description: "Continuously improving my problem-solving and full-stack development skills." },
];

export default function RotatingWords() {

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
        WHAT I BRING
      </span> 
      <p className="mt-3 max-w-2xl text-center text-body-base text-muted-foreground">
        I approach development with a learning mindset, focusing on understanding problems, writing clean code, and continuously improving my technical skills.
      </p>
      <div className="mt-8 grid w-full max-w-5xl gap-4 px-4 md:grid-cols-3">
        {strengths.map((strength) => (
          <div key={strength.number} className="rounded-2xl border border-border bg-card/70 p-5 text-left">
            <span className="text-sm font-bold text-primary">{strength.number}</span>
            <h1 className="mt-2 text-xl font-bold text-foreground">{strength.title}</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
