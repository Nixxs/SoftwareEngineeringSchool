import { useState } from "react"

function MoodChanger(){
    const [mood, setMood] = useState("happy");
    const [activity, setActivity] = useState("exercise");

    const handleMood = () => {
        switch (activity){
            case "exercise":
                setMood("tired");
                setActivity("sleep");
                break
            case "sleep":
                setMood("happy");
                setActivity("exercise");
                break
            default:
                setMood("happy");
                setActivity("exercise");
        }
    }
    
    return (
        <div className="MoodChanger componentBox">
            <p>Current Mood: {mood}</p>

            <button onClick={handleMood}>{activity}</button>
        </div>
    )
}

export default MoodChanger