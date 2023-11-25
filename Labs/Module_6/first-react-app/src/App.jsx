import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import City from "./City";
import Address from "./Address";
import Greeting from "./Greeting";
import Pet from "./Pet";
import FullName from "./FullName";
import Comment from "./Comment";
import {Callout, NormalHTML} from "./Callout";
import MoviesList from "./MoviesList";
import BigCats from "./BigCats";
import MoodChanger from "./MoodChanger";
import Emoji from "./Emoji";
import BirthdayTranslator from "./BirthdayTranslator";
import Calculator from "./Calculator";

function App() {
  const [count, setCount] = useState(0);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  function ExampleComponent() {
    return (
      <div className="ExampleComponent componentBox">
        <h1>My Example Component</h1>
        <p>My first React component!</p>
      </div>
    );
  }

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* slide 16 */}
      {spideyJSX}

      {/* slide 19 */}
      <ExampleComponent />

      {/* slide 28 */}
      <City name="Sydney" />
      <City name="Perth" state="WA" country="Australia" />
      <City name="Melbourne" state="VIC" country="Australia" />
      <Address />

      {/* slide 29 */}
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>

      {/* Slide 32 */}
      <Greeting name="Nick">welcome to the webpage</Greeting>

      {/* slide 31 */}
      <Pet type="Dog" name="Max" colour="White"></Pet>

      {/* slide 36 */}
      <FullName first="Kendrick" last="Lamar"></FullName>
      <FullName first="Nick" last="Chai"></FullName>

      {/* slide 38 */}
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

      {/* slide 41 */}
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>

      {/* for react comparison purposes */}
      <NormalHTML />

      {/* slide 47 */}
      <MoviesList />

      {/* slide 48 */}
      {/* slide 73 */}
      {/* slide 81 */}
      <BigCats />

      {/* slide 50 */}
      <MoodChanger />

      {/* slide 59 */}
      <Emoji />

      {/* slide 61 */}
      <BirthdayTranslator />

      {/* slide 90 */}
      <Calculator />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
