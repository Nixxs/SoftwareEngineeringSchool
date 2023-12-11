import React from "react";

export const EmojiContext = React.createContext(null);

const EmojiProvider = ({children}) => {
    const [mood, setMood] = React.useState("😊");

    return (
        <EmojiContext.Provider value={{mood, setMood}} >
            {children}
        </EmojiContext.Provider>
    );
}

export default EmojiProvider