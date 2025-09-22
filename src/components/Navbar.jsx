import CustomButton from "./Button"

function Navbar() {
    return (
        <div className="flex justify-center">
            <ul className="backdrop-blur-md bg-white/10
                flex justify-center items-center 
                space-x-10 p-3 border border-white/20 m-10
                text-white rounded-md shadow-lg
            ">
                <li><a href="#" className="hover:text-gray-800 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Skills</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Blogs</a></li>
                <li><a href="#" className="hover:text-gray-800 transition">Contact</a></li>
                <CustomButton />
            </ul>
        </div>
    );
}

export default Navbar;