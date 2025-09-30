function TextCarousel() {
  
  const items = [
    "#FlutterDevelopment",
    "#DjangoBackend",
    "#SQL",
    "#PostgreSQL",
    "#AWSCloud",
    "#MobileAppDeployment",
    "#DataScience",
    "#FullStackDevelopment",
    "#APIDevelopment",
    "#CloudComputing",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4 text-primary opacity-20 ">
      <div 
        className="inline-flex gap-8"
        style={{
          animation: 'scroll 25s linear infinite',
        }}
      >
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <ul className="flex gap-4 whitespace-nowrap">
          {/* Map the items twice for seamless scroll */}
          {[...items, ...items].map((item, idx) => (
            <li key={idx} className="text-xl font-light">
              {item}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default TextCarousel;