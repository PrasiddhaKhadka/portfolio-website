function About({aboutRef}) {
  return (
    <div ref={aboutRef} className="relative h-auto w-full flex items-center justify-center bg-radial-[at_35%_55%] from-secondary to-accent to-80%">
      {/* Centered content */}
      <div className="md:m-48 relative z-10 text-center items-center max-w-5xl px-20 py-16 text-xl font-light text-primary opacity-60">
        <p>
          <b className="font-[700]">Full Stack Software Engineer</b> with hands-on
          experience in <b className="font-[700]">Python</b>, <b className="font-[700]">Java</b>,{" "}
          <b className="font-[700]">Dart</b>, <b className="font-[700]">PostgreSQL</b>, and{" "}
          <b className="font-[700]">MySQL</b>. I write clean code, automate tasks,
          and build applications that are reliable, secure, and scalable. I enjoy
          learning, growing, and improving software experiences, and I’m passionate
          about <b className="font-[700]">Data Science</b> leveraging analytical
          skills to deliver data-driven solutions.
        </p>
      </div>

      {/* Decorative outlined grid bottom-left */}
    <div className="absolute bottom-6 left-0 grid grid-cols-10 gap-0 opacity-10">
        {Array.from({ length: 120 }).map((_, i) => (
            <div
            key={i}
            className="w-9 h-9 border border-white/10"
            ></div>
        ))}
        </div>

    </div>
  );
}

export default About;
