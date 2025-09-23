import Navbar  from "./Navbar";
import GridDesign  from "./Grid_Design";
import CustomButton from "./Button";
import TextCarousel from "./Text_Carousel";
function Hero(){
    return (
    <div className="relative h-screen w-full bg-radial-[at_50%_75%] from-[#033232] via-[#021D1D] to-[#010A09]">
     <Navbar/>

      {/* Grid background */}

      <GridDesign children={<>
            <div className="">
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold">
                  <span className="text-[#CEFEFF]">
                    From Code To Deployments
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-center text=[#CEFEFF] m-7">
                  Hi 👋 My name is Prasiddha and I write clean code, automate tasks and build apps that don't break. Learning, growing and making software better
                </p>

               <CustomButton/>
              </div>
            </div>
        </>}/>

    
      <TextCarousel/>
   
    </div>
  );
}

export default Hero