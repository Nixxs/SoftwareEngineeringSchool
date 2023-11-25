import { useState } from "react"

const phrases = new Map([
    ["english", "Happy Birthday"],
    ["german", "Alles Gute zum Geburtstag"],
    ["spanish", "Feliz Cumpleaños"],
]);

function TranslatorButton(props) {
    return(
        <button onClick={() => {props.handler(props.lang)}}>
            {props.lang}
        </button>
    )
}

function BirthdayTranslator() {
    const [currentLanguage, setCurrentLanguage] = useState("english");
    const [phrase, setPhrase] = useState(phrases.get("english"));

    const handleChangeLanguage = (lang) => {
        setCurrentLanguage(lang);
        setPhrase(phrases.get(lang));
    };

    return (
        <div className="BirthdayTranslator componentBox">
            <h3>
                {phrase}! ({currentLanguage})
            </h3>

            {Array.from(phrases.keys()).map(
                function (language){
                    return (
                        <TranslatorButton 
                            key={language}
                            lang={language}
                            handler={handleChangeLanguage}
                        />
                    )
                })
            }
        </div>
    );
}

export default BirthdayTranslator