function Hero(){
    return (
    <div className="relative h-screen w-full ">
      {/* Grid background */}
      <div>
        
      </div>
      <div
        className="absolute inset-0 bg-gray-900"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>
    </div>
  );
}

export default Hero