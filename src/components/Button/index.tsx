// import soundEffect from "../../../public/sounds/button_click.wav";
import soundEffectFile from "../../sounds/button_click.wav";
interface ButtonProps {
  label: string;
  clickBehavior: () => void;
}

function button_onClick() {
  console.log("Default onclick");
  playButtonClickAudio();
}

function playButtonClickAudio() {
  const soundEffectAudio = new Audio(soundEffectFile);
  soundEffectAudio.play();
}

function Button(props: ButtonProps) {
  return (
    <button
      className="rounded-lg text-[#FFF9C4] bg-[#FFB347] px-5 py-2.5"
      onClick={() => {
        props.clickBehavior();
        button_onClick();
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;
