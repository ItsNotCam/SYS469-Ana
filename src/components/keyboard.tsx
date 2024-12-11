import React, { useState } from "react";

import BackArrowIcon from "../assets/back-arrow.svg";
import UpChevronIcon from "../assets/up-chevron.svg";
import MicrophoneIcon from "../assets/microphone.png";

// have to do it like this s.t. i can have hoverable be defaulted to true
interface KeyboardKeyType {
  key: JSX.Element;
  colSpan: number;
  alwaysHighlighted?: boolean;
  hoverable?: boolean;
  value: string;
}

class KeyboardKey {
  key: JSX.Element;
  colSpan: number;
  alwaysHighlighted?: boolean;
  hoverable?: boolean;
  value: string;

  constructor(props: KeyboardKeyType) {
    this.key = props.key;
    this.colSpan = props.colSpan;
    this.alwaysHighlighted = props.alwaysHighlighted;
    this.value = props.value;

    if (props.hoverable === undefined) {
      this.hoverable = true;
    } else {
      this.hoverable = props.hoverable;
    }
  }
}

interface KeyboardProps {
  onClickKey: (str: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onClickKey: sendKeyToParent }) => {
  const [uppercase, setUppercase] = useState<boolean>(false);

  const handleKeyClick = (key: KeyboardKey) => {
		const value = key.value;
		console.log(value);
		switch(value) {
			case "SHIFT":
				setUppercase(u => !u);
				return;
			case "BACKSPACE":
				sendKeyToParent(value);
				return;
			case "MICROPHONE":
			case "BACK":
			case "ENTER":
			case "NEXT": 
			case "NULL":
				return;
		}

		sendKeyToParent(uppercase ? value.toUpperCase() : value);
  };

	const getKey = (key: KeyboardKey) => {
		const value = key.value;
		switch(value) {
			case "SHIFT":
			case "MICROPHONE":
			case "BACKSPACE":
			case "SPACE":
			case "BACK":
			case "ENTER":
			case "NEXT": 
			case "NULL":
				return key.key;
		}

		return uppercase ? value.toUpperCase() : value;
	}


  const keys: KeyboardKey[][] = [
    [
      new KeyboardKey({ key: <>q</>, colSpan: 1, value: "q" }),
      new KeyboardKey({ key: <>w</>, colSpan: 1, value: "w" }),
      new KeyboardKey({ key: <>e</>, colSpan: 1, value: "e" }),
      new KeyboardKey({ key: <>r</>, colSpan: 1, value: "r" }),
      new KeyboardKey({ key: <>t</>, colSpan: 1, value: "t" }),
      new KeyboardKey({ key: <>y</>, colSpan: 1, value: "y" }),
      new KeyboardKey({ key: <>u</>, colSpan: 1, value: "u" }),
      new KeyboardKey({ key: <>i</>, colSpan: 1, value: "i" }),
      new KeyboardKey({ key: <>o</>, colSpan: 1, value: "o" }),
      new KeyboardKey({ key: <>p</>, colSpan: 1, value: "p" }),
      new KeyboardKey({
        key: <img src={BackArrowIcon} id="BACKSPACE" className="mx-auto" />,
        colSpan: 2,
        value: "BACKSPACE",
				alwaysHighlighted: true,
      }),
    ],
    [
      new KeyboardKey({ key: <>a</>, colSpan: 1, value: "a" }),
      new KeyboardKey({ key: <>s</>, colSpan: 1, value: "s" }),
      new KeyboardKey({ key: <>d</>, colSpan: 1, value: "d" }),
      new KeyboardKey({ key: <>f</>, colSpan: 1, value: "f" }),
      new KeyboardKey({ key: <>g</>, colSpan: 1, value: "g" }),
      new KeyboardKey({ key: <>h</>, colSpan: 1, value: "h" }),
      new KeyboardKey({ key: <>j</>, colSpan: 1, value: "j" }),
      new KeyboardKey({ key: <>k</>, colSpan: 1, value: "k" }),
      new KeyboardKey({ key: <>l</>, colSpan: 1, value: "l" }),
      new KeyboardKey({ key: 
				<>Enter</>, 
				colSpan: 2, 
				value: "ENTER",
				alwaysHighlighted: true, 
			}),
    ],
    [
      new KeyboardKey({ key: <>z</>, colSpan: 1, value: "z" }),
      new KeyboardKey({ key: <>x</>, colSpan: 1, value: "x" }),
      new KeyboardKey({ key: <>c</>, colSpan: 1, value: "c" }),
      new KeyboardKey({ key: <>v</>, colSpan: 1, value: "v" }),
      new KeyboardKey({ key: <>b</>, colSpan: 1, value: "b" }),
      new KeyboardKey({ key: <>n</>, colSpan: 1, value: "n" }),
      new KeyboardKey({ key: <>m</>, colSpan: 1, value: "m" }),
      new KeyboardKey({ key: <>-</>, colSpan: 1, value: "-" }),
      new KeyboardKey({ key: <>,</>, colSpan: 1, value: "," }),
      new KeyboardKey({ key: <>.</>, colSpan: 1, value: "." }),
    ],
    [
      new KeyboardKey({
        key: (
          <span className="text-3xl" onClick={() => setUppercase((u) => !u)}>
            <img src={UpChevronIcon} id="shift" className="m-auto" />
          </span>
        ),
				value: "SHIFT",
        alwaysHighlighted: true,
        colSpan: 4,
      }),
      new KeyboardKey({
        key: <img src={MicrophoneIcon} className="m-auto" />,
				value: "MICROPHONE",
        alwaysHighlighted: true,
        colSpan: 2,
      }),
      new KeyboardKey({
        key: <></>,
				value: "SPACE",
        colSpan: 10,
        alwaysHighlighted: true,
      }),
      new KeyboardKey({
        key: <img src={BackArrowIcon} className="my-auto" />,
        colSpan: 2,
				value: "BACK",
        alwaysHighlighted: true,
      }),
      new KeyboardKey({
        key: (
          <img
            src={BackArrowIcon}
            className="my-auto"
            style={{ rotate: "180deg" }}
          />
        ),
				value: "NEXT",
        colSpan: 2,
        alwaysHighlighted: true,
      }),
      // new KeyboardKey({ key: <></>, colSpan: 4, hoverable: false, value: "NULL" }), // a spacer
    ],
  ];

	const numpadKeys: KeyboardKey[] = [
		new KeyboardKey({ key: <>1</>, colSpan: 1, value: "1" }),
		new KeyboardKey({ key: <>2</>, colSpan: 1, value: "2" }),
		new KeyboardKey({ key: <>3</>, colSpan: 1, value: "3" }),
		new KeyboardKey({ key: <>4</>, colSpan: 1, value: "4" }),
		new KeyboardKey({ key: <>5</>, colSpan: 1, value: "5" }),
		new KeyboardKey({ key: <>6</>, colSpan: 1, value: "6" }),
		new KeyboardKey({ key: <>7</>, colSpan: 1, value: "7" }),
		new KeyboardKey({ key: <>8</>, colSpan: 1, value: "8" }),
		new KeyboardKey({ key: <>9</>, colSpan: 1, value: "9" }),
		new KeyboardKey({ key: <></>, colSpan: 1, hoverable: false, value: "NULL" }),
		new KeyboardKey({ key: <>0</>, colSpan: 1, value: "0" }),
		new KeyboardKey({ key: <></>, colSpan: 1, hoverable: false, value: "NULL" }),
	];

  return (
    <div id="keyboard" className="grid grid-cols-[1fr,350px] place-items-center bg-white w-full">
      <div className="flex flex-col gap-4 justify-start items-center p-4">
        {keys.map((row: KeyboardKey[], i: number) => (
          <div
            className="grid mx-auto gap-4"
            style={{
              gridTemplateColumns: `repeat(${row.reduce(
                (total, key) => total + key.colSpan,
                0
              )},1fr)`,
            }}
          >
            {row.map((key: KeyboardKey, i: number) => (
              <span
                key={`key-${i}`}
                onClick={() => handleKeyClick(key)}
                className={`
								text-lg px-6 py-4 text-center rounded-lg select-none
								${key.alwaysHighlighted ? "bg-gray-200" : null}
								${key.hoverable
                    ? key.alwaysHighlighted
                      ? "hover:bg-gray-300"
                      : "hover:bg-gray-200"
                    : null}
							`}
                style={{
                  gridColumn: `span ${key.colSpan}`,
                }}
              >
                {getKey(key)}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="
				mr-auto h-full grid w-[300px]
				grid-cols-[repeat(3,100px)] 
				place-items-center my-auto cursor-default select-none
			">
        {numpadKeys.map((key) => (
          <div
						onClick={() => handleKeyClick(key)}
            className={`grid place-items-center px-8 py-4 my-auto 
						${key.hoverable ? "hover:bg-gray-300" : null} rounded-lg text-lg
					`}
          >
            {key.key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
