import React, { useState } from 'react';

function WaitingRoom() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const nextNumber = () => {
    const newNumber = currentNumber + 1;
    setCurrentNumber(newNumber);
    speakNumber(newNumber);
  };

  const speakNumber = (number) => {
    const message = new SpeechSynthesisUtterance('المريض التالي رقم ' + number);
    message.lang = 'ar-SA';

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) => voice.lang === 'ar-SA' && voice.voiceURI.includes('female')
    );

    if (femaleVoice) {
      message.voice = femaleVoice;
    }

    if (window.speechSynthesis) {
      window.speechSynthesis.speak(message);
    } else {
      console.error('Speech Synthesis API not supported');
    }
  };

  return (
    <div className='waitingRoom d-flex justify-content-center'>
      <div className="counter " onClick={nextNumber}>
        <div className="message">المريض التالي رقم {currentNumber}</div>
      </div>

      
    </div>
  );
}

export default WaitingRoom;
