import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DogGif from "./assets/dog1.gif";
import YesGif1 from "./assets/yes1.gif";
import YesGif2 from "./assets/yes2.gif";
import YesGif3 from "./assets/yes3.gif";
import YesGif4 from "./assets/yes4.gif";
import YesGif5 from "./assets/yes5.gif";
import YesGif6 from "./assets/yes6.gif";
import EndingGif from "./assets/ending1.gif";

// const starting_bgms = ["cV4P6j8OWfI", "a49JDdlCfSA"];
// const ending_bgms = ["iJWXVUrMXlU", "wZRJOw2g"];

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [imageSrc, setImageSrc] = useState(DogGif);
  const [titleText, setTitleText] = useState("你喜欢我吗？");
  const [showNoButton, setShowNoButton] = useState(true);
  const [showValentineMessage, setShowValentineMessage] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  // We only need the setter here; the current count value is not displayed.
  const [, setNoClickCount] = useState(0);

  // Track which event should fire next for each button
  const [yesEventIndex, setYesEventIndex] = useState(0);
  const [noEventIndex, setNoEventIndex] = useState<0 | 1>(0);

  // Yes button events
  const yesEvent1 = () => {
    setImageSrc(YesGif1);
    setTitleText("太好了，我也喜欢你！");
    setShowNoButton(false);
    setYesEventIndex(1);
  };

  const yesEvent2 = () => {
    setImageSrc(YesGif2);
    setTitleText("再说一遍好不好？");
    setYesEventIndex(2);
  };

  const yesEvent3 = () => {
    setImageSrc(YesGif3);
    setTitleText("嘿嘿，我听得好开心～");
    setYesEventIndex(4);
  };

  const yesEvent4 = () => {
    setImageSrc(YesGif4);
    setTitleText("喜欢+1，今天也是恋爱的一天！");
    setYesEventIndex(4);
  };

  const yesEvent5 = () => {
    setImageSrc(YesGif5);
    setTitleText("已经完全被你拿下了！");
    setYesEventIndex(5);
  };

  const yesEvent6 = () => {
    setImageSrc(YesGif6);
    setTitleText("我也会一直一直喜欢你 ❤️");
    // stay on the last sweet state
    setYesEventIndex(5);
    setShowValentineMessage(true);
    setShowButtons(false);
  };

  // No button events
  const noEvent1 = () => {
    setImageSrc(EndingGif);
    setTitleText("真的吗？再想一想好不好？");
    setNoEventIndex(1);
  };

  const noEvent2 = () => {
    setImageSrc(DogGif);
    setTitleText("不可以说不喜欢哦！");
    setNoEventIndex(0);
  };

  const yesButton_onClick = () => {
    // Trigger the current yes event, which will also swap to the next one
    switch (yesEventIndex) {
      case 0:
        yesEvent1();
        break;
      case 1:
        yesEvent2();
        break;
      case 2:
        yesEvent3();
        break;
      case 3:
        yesEvent4();
        break;
      case 4:
        yesEvent5();
        break;
      case 5:
      default:
        yesEvent6();
        break;
    }
  };

  const noButton_onClick = () => {
    // Increase click count and hide the No button after 3 clicks
    setNoClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setShowNoButton(false);
      }
      return next;
    });

    // Trigger the current no event, which will also swap to the next one
    if (noEventIndex === 0) {
      noEvent1();
    } else {
      noEvent2();
    }
  };

  if (!hasStarted) {
    return (
      <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#FFF9C4]">
        <Button label="Start" clickBehavior={() => setHasStarted(true)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#FFF9C4]">
      <img src={imageSrc} alt="cute dancing dog" className="w-60 h-60 my-4" />
      <h1 className="text-3xl font-bold">{titleText}</h1>
      {showValentineMessage && (
        <>
          <h1 className="text-3xl font-bold">情人节快乐!</h1>
          <h1 className="text-3xl font-bold mt-4">by 你的boy boy</h1>
        </>
      )}
      {showButtons && (
        <div className="flex flex-row gap-5 mt-5">
          <Button label="喜欢你!" clickBehavior={yesButton_onClick} />
          {showNoButton && (
            <Button label="不喜欢..." clickBehavior={noButton_onClick} />
          )}
        </div>
      )}
      {/* Background music starts after user taps "Start" screen */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/cV4P6j8OWfI?autoplay=1&loop=1&playlist=cV4P6j8OWfI&controls=0"
        allow="autoplay; encrypted-media"
        title="background-music"
      ></iframe>
    </div>
  );
}

export default App;
