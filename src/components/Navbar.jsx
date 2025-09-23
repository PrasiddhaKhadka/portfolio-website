import CustomButton from "./Button"

function Navbar() {
    return (
        <div className="flex justify-center">
            <ul className="hidden sm:flex backdrop-blur-md bg-white/10
                 justify-center items-center 
                space-x-10 p-3 border border-white/20 m-10
                text-white rounded-md shadow-lg
            ">
                <li><a href="#" className="hover:text-gray-800 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Skills</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Blogs</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Contact</a></li>
                <CustomButton color="bg-[#D9D9D9]" 
                width="w-30"
                height="h-10"
                children={"Contact me"}
                />
            </ul>
        </div>
    );
}

export default Navbar;