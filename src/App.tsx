import "./App.css";
import Button from "./components/Button";

function yesButton_onClick() {
  console.log("Yes button was clicked");
}

function noButton_onClick() {
  console.log("No button was clicked");
}

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-[#FFF9C4]">
      <h1 className="text-3xl font-bold">你喜欢我吗？</h1>
      <div className="flex flex-row gap-5">
        <Button label="Yes" clickBehavior={yesButton_onClick} />
        <Button label="No" clickBehavior={noButton_onClick} />
      </div>
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&loop=1&playlist=cV4P6j8OWfI&controls=0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default App;
