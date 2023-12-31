import { useRef } from "react";

type InputCardProps = {
  TodoTitle: string;
  buttonText: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleFunction: () => void;
};

const InputCard = ({
  TodoTitle,
  buttonText,
  setTitle,
  handleFunction,
}: InputCardProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-4 justify-between items-center bg-white-primary p-5 shadow-lg rounded-lg">
      <h1 className="text-center text-black font-semibold">{TodoTitle}</h1>
      <input
        type="text"
        ref={ref}
        className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button
        // disable button if input is empty
        disabled={!ref.current?.value}
        className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        onClick={() => handleFunction()}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputCard;
