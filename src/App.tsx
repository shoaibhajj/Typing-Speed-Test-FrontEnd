import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import Word from "./components/Word";
import Timer from "./components/Timer";
import Result from "./components/Result";
import LanguageSelector from "./components/LanguageSelector";
import CompetitiveHeading from "./components/CompetitiveHeading";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

// const getCloud = () =>
//   "codemnan shoaib payload react tailwind tesla javascript word mars  wood coding html dogcoin bticoin macbook".split(
//     " "
//   );

// .sort(() => (Math.random() > 0.5 ? 1 : -1));

function App() {
  const [userInput, setUserInput] = useState("");
  const [language, setLanguage] = useState("english");
  // const cloud = useRef(getCloud());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState<boolean[]>([]);
  const [correctCharArray, setCorrectCharArray] = useState<boolean[]>([]);
  const [startCounting, setStartCounting] = useState(false);
  const [newWords, setNewWords] = useState<string[]>([]);
  const [timeEnded, setTimeEnded] = useState(false);
  const windowSize = 20;
  const windowStart = Math.floor(activeWordIndex / windowSize) * windowSize;
  const windowWords = newWords.slice(windowStart, windowStart + windowSize);
  const [wpm, setWpm] = useState(0);
  const [Time, setTime] = useState<number>(60);
  const isRTL = language === "arabic";
   const { width, height } = useWindowSize();

  const fetchWords = () => {
    fetch(
      ` https://type-test-speed-backend-production.up.railway.app/words?language=${language}&count=200`
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredWords = data.words
          .filter((word: string) => word.length > 1)
          .sort(() => (Math.random() > 0.5 ? 1 : -1));
        setNewWords(filteredWords);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWords();
  }, [language]);

  console.log(correctWordArray);

  const handleLanguageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLanguage(e.target.value);
    setTimeEnded(false);
    setTime(60);
    setStartCounting(false);
    setUserInput("");
    setWpm(0);
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setCorrectCharArray([]);
  };

  const prosessInput = (value: string) => {
    if (activeWordIndex === newWords.length || timeEnded) {
      setUserInput("Completed...");
      return;
    }

    if (!startCounting) setStartCounting(true);

    const currentWord = newWords[activeWordIndex];

    if (!value.endsWith(" ")) {
      // Check each character correctness
      const charChecks = value
        .split("")
        .map((char, i) => char === currentWord[i]);
      setCorrectCharArray(charChecks);
    }

    if (value.endsWith(" ")) {
      const typedWord = value.trim();

      setCorrectWordArray((prev) => {
        const newResult = [...prev];
        newResult[activeWordIndex] = typedWord === currentWord;
        return newResult;
      });

      // Reset input
      setUserInput("");
      setCorrectCharArray([]);

      // Move to next word
      if (activeWordIndex === newWords.length - 1) {
        setStartCounting(false);
        setUserInput("Completed...");
      }
      setActiveWordIndex((prev) => prev + 1);
    } else {
      setUserInput(value);
    }
  };

  return (
    <div className=" bg-[#111111] h-full w-full min-h-screen ">
      {userInput === "Completed..." && (
        <Confetti width={width} height={height} />
      )}
      <div className=" container  md:max-w-4xl w-full h-full mx-auto pt-20  text-white  justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-semibold p-4 text-center">
            Type Test Speed by{" "}
            <span className="text-transparent  bg-clip-text bg-gradient-to-r  from-cyan-500 to-purple-500 font-extrabold italic ">
              Shoaib Hajj{" "}
              <span className="bg-transparent text-amber-300"> 🔥 </span>
            </span>
          </h1>
          <div>
            <CompetitiveHeading language={language} />
          </div>

          <div className="mt-10 container max-w-xs md:max-w-4xl m-2">
            <p
              style={{
                direction: isRTL ? "rtl" : "ltr",
                textAlign: isRTL ? "right" : "left",
                unicodeBidi: "plaintext", // Important for mixed content
              }}
              className="flex flex-wrap gap-2 text-white bg-[#191919] p-6 text-3xl w-full min-h-[100px] overflow-hidden rounded-lg"
            >
              {windowWords.map((word, index) => {
                const globalIndex = windowStart + index;
                return (
                  <Word
                    key={globalIndex}
                    text={word}
                    active={globalIndex === activeWordIndex}
                    correct={correctWordArray[globalIndex]}
                    correctChars={
                      globalIndex === activeWordIndex
                        ? correctCharArray
                        : undefined
                    }
                  />
                );
              })}
            </p>
            <div className="flex justify-between items-center mt-5 gap-5 flex-col md:flex-row ">
              <input
                type="text"
                value={userInput}
                className="bg-[#18181a] text-white p-5 flex-2 rounded-lg border-2 border-[#252427] focus:outline-none focus:ring-2 focus:ring-[#61a5f4] text-xl "
                onChange={(e) => {
                  prosessInput(e.target.value);
                }}
                placeholder="Start Typing here to start this test.."
              />
              <div className="">
                <Timer
                  startCounting={startCounting}
                  setStartCounting={setStartCounting}
                  currectWords={correctWordArray.filter(Boolean).length}
                  setTimeEnded={setTimeEnded}
                  timeEnded={timeEnded}
                  setUserInput={setUserInput}
                  setActiveWordIndex={setActiveWordIndex}
                  setCorrectWordArray={setCorrectWordArray}
                  setCorrectCharArray={setCorrectCharArray}
                  fetchWords={fetchWords}
                  wpm={wpm}
                  setWpm={setWpm}
                  Time={Time}
                  setTime={setTime}
                />
              </div>
            </div>
          </div>
          <div className="container max-w-2xl flex justify-between w-full mt-10 flex-col md:flex-row">
            <div className="mt-5 flex flex-1  justify-around   ">
              <h5 className="inline-block">Language</h5>
              <div className="">
                <LanguageSelector
                  selectedLanguage={language}
                  onChange={handleLanguageChange}
                />
              </div>
            </div>

            <div className="flex-1  justify-start mt-5 items-center">
              <Result
                showResualt={userInput === "Completed..."}
                wpm={wpm}
                correctWords={
                  correctWordArray.filter((item) => item === true).length
                }
                InCorrectWords={
                  correctWordArray.filter((item) => item === false).length
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
