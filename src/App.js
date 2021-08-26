import React, { useState } from "react";
import "./styles.css";

// create object to put all emoji data at one place
// This is like a hashmap where searching a key takes O(1) time.

// Instant searching
// This is like our dummy database
var emojiDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦊": "Fox",
  "🐅": "Tiger",
  "🦁": "Lion",
  "🐈": "Cat",
  "🦌": "Deer",
  "🐄": "Cow",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐘": "Elephant"
};

// How to conver an object to an array??
// console.log(Object.keys(emojiDictionary));
// console.log(Object.values(emojiDictionary));

let emojiArray = Object.keys(emojiDictionary);

// Now what we want to do is whenever the user
// inputs an emoji we render it's meaning in the view.

export default function App() {
  // emoji meaning
  const [meaning, setMeaning] = useState("translation will appear here..");

  // handler function for emoji the user inputs.
  function emojInputHandler(event) {
    // console.log(event.target.value);

    const userInputEmoji = event.target.value;

    // Now we have the emoji input by the user.
    // So, Now we look for that emoji in the emojiDictionary.

    // get the value of the key
    let meaning = emojiDictionary[userInputEmoji];
    // console.log(meaning);

    //error handling
    // key in object javascript ==> Read about it
    if (userInputEmoji in emojiDictionary) {
      //Output ==> useState function to show the ouptut in the view
      setMeaning(meaning); // react call to show output
    } else {
      setMeaning("failure to recognise this emoji..try something different");
    }
  }

  // handler function for emoji click handler
  function emojiClickHandler(item) {
    let meaning = emojiDictionary[item];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>Animal Kingdom</h1>

      <input onChange={emojInputHandler}></input>

      {/* actual ouptut set by react using useState*/}
      <div className="Output">{meaning}</div>

      <h3>Try from these below</h3>

      <div>
        {emojiArray.map((item) => {
          // console.log(item);

          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
