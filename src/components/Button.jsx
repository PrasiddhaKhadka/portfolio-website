function CustomButton({ 
  children, 
  onClick, 
  width = "w-auto", 
  textColor = "text-white",
  height = "h-auto",
  color = "bg-blue-500" 
}) {
  return (
    <button
      onClick={onClick}
      className={`${color} ${width} ${height} ${textColor} px-4 py-2 rounded-md hover:opacity-90 transition break-words whitespace-normal text-center text-wrap border-ra`  }
    >
      {children}
    </button>
  )
}

export default CustomButton;
