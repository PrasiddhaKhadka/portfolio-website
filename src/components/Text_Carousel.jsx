function TextCarousel(){
    return (
        <div className="flex space-x-16 animate-infinite-scroll">
            <ul className="flex text-white items-center justify-around animate-loop-scroll">
                <li>#Item 1</li>
                <li>#Item 2</li>
                <li>#Item 3</li>
                <li>#Item 4</li>
                <li>#Item 5</li>
                <li>#Item 1</li>
                <li>#Item 2</li>
                <li>#Item 3</li>
                <li>#Item 4</li>
                <li>#Item 5</li>
            </ul>

        </div>
    )
}

export default TextCarousel;