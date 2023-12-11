import { useContext } from "react";
import { EmojiContext } from "./EmojiContext";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function Emoji() {
  const happyEmoji = "😊";
  const sadEmoji = "😥";

  const { mood, setMood } = useContext(EmojiContext);

  function changeMood() {
    if (mood == happyEmoji) {
      setMood(sadEmoji);
    } else {
      setMood(happyEmoji);
    }
  }

  return (
    <div className="componentBox">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <p>Current Mood:</p>
          <p>{mood}</p>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button onClick={changeMood} variant="contained">
            Toggle Mood
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Emoji;
