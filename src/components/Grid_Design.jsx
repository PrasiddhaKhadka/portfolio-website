function GridDesign({ children }) {
  return (
    <div className="relative min-h-3/4 bg-gradient-to-br text-white overflow-hidden flex items-center justify-center">
      {/* grid background with fade mask */}
      <div
        className="absolute inset-0 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] 
          bg-[size:40px_40px]
          [mask-image:radial-gradient(circle_at_center,white,transparent)] 
          [mask-repeat:no-repeat] [mask-size:cover]"
      ></div>

      {/* content (centered & not affected by mask) */}
      <div className="relative z-10 text-center">
        {children}
      </div>
    </div>
  );
}

export default GridDesign;
