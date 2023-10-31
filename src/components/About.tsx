import { useState } from 'react';

function ReadMoreText() {
  const initialText =
    "Here is some introductory text. This is the part that you'll see initially. " +
    "And here is the rest of the text that will be hidden until you click 'Read More.' " +
    "You can put as much text as you want here.";

  const [displayText, setDisplayText] = useState(initialText);
  const [isFullTextDisplayed, setIsFullTextDisplayed] = useState(false);

  const toggleText = () => {
    setIsFullTextDisplayed(!isFullTextDisplayed);
    setDisplayText(isFullTextDisplayed ? initialText : '');
  };

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={toggleText}>
        {isFullTextDisplayed ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default ReadMoreText;