import { useState } from "react"

export const TextReveal = () => {
    const [text, setText] = useState('');
    function showText(e){
        return(
            setText(e.target.value)
        )
    }
    return(
        <div>
            <input type="text" 
            onChange = {showText}
            value = {text}
            placeholder="Type your story here..."/>
            <p>{text}</p>
        </div>
    )
}