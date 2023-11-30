import { useState } from "react"

function Emoji(){

    const happyEmoji = "😊";
    const sadEmoji = "😥"

    const [mood, setMood] = useState(happyEmoji)

    function changeMood(){
        if (mood == happyEmoji){
            setMood(sadEmoji);
        } else {
            setMood(happyEmoji);
        }
    }

    return (
        <div className="componentBox">
            <p>
                Current Mood:</p>
                <p>{mood}</p>
            <button onClick={changeMood}>Toggle Mood</button>
        </div>
    )
}

export default Emoji