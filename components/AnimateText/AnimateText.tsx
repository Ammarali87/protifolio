
import { useState, useEffect } from 'react';


export default function AnimateText(){
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    
    const fullText = "Amar Ali Salih";

    useEffect(() => {
      if (index < fullText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 150); // Adjust the speed here (in milliseconds)
        return () => clearTimeout(timeoutId);
      } else {
        // Reset the text after a short delay
        const resetTimeoutId = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1300); // Adjust the delay here
        return () => clearTimeout(resetTimeoutId);
      }
    }, [index]);
  
    return displayedText
}