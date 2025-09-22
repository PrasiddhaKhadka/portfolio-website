function CustomButton({children}){
    return(
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={ ()=> console.log("Button Clicked")}>
            
        </button>
    )
}

export default CustomButton;