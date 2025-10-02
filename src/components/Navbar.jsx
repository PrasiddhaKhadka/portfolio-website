import CustomButton from "./Button"
import logo from "../assets/icons/logo.svg"; 

function Navbar({ scrollToAbout}) {
    return (
        <div className="flex justify-center">
            <ul className="hidden sm:flex backdrop-blur-md bg-white/10
                 justify-center items-center 
                space-x-12 p-3 border border-white/20 m-5
                text-white shadow-lg
                font-thin            
                rounded-l-2xl   
                rounded-r-2xl
            ">
                
                <img src={logo} alt="logo" />
                <li><button onClick={scrollToAbout}><a href="#" className="hover:text-gray-800 transition">About</a></button></li>
                <li><a href="#" className="hover:text-gray-800 transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Skills</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Blogs</a></li>
                <CustomButton color="bg-[#D9D9D9]" 
                width="w-25"
                height="h-10"
                children={"Contact"}
                textColor="text-secondary"
                />
            </ul>
        </div>
    );
}

export default Navbar;