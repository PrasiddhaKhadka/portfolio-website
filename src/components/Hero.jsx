import Navbar  from "./Navbar";
import GridDesign  from "./Grid_Design";
import CustomButton from "./Button";
import TextCarousel from "./Text_Carousel";
function Hero({ aboutRef }){

    const scrollToAbout = () => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
    <div className="relative h-screen w-full bg-radial-[at_40%_65%] from-[#033232] via-[#021D1D] to-[#010A09]">
     <Navbar scrollToAbout={scrollToAbout}/>

      {/* Grid background */}

      <GridDesign children={<>
            <div className="">
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <h1 className="text-3xl sm:text-5xl font-bold">
                    <span className="text-primary">
                      From Code To Deployments,
                    </span>
                    <span className="block text-primary">
                      I write code that works.
                    </span>
                  </h1>
                <p className="mt-7 max-w-xl text-center text-primary opacity-60 m-7">
                  Hi 👋 I’m Prasiddha, an engineer from Nepal. I specialize in writing clean, maintainable code, automating tasks, and developing reliable applications.
                </p>

              <div className="flex gap-4 mt-5">
               <CustomButton children={"Contact me"} color="bg-[#D9D9D9]" textColor="text-[#010A09]"/>
               <CustomButton children={"See Portfolio"} color="bg-[#021D1D]" />
              </div> 

              </div>
            </div>
        </>}/>

    
      <TextCarousel/>
   
    </div>
  );
}

export default Hero