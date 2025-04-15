import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

function Timer({
  startCounting,
  setStartCounting,
  currectWords,
  setTimeEnded,
  timeEnded,
  setUserInput,
  setActiveWordIndex,
  setCorrectWordArray,
  setCorrectCharArray,
  fetchWords,
  wpm,
  setWpm,
  Time,
  setTime,
}: {
  startCounting: boolean;
  setStartCounting: (val: boolean) => void;
  currectWords: number;
  timeEnded: boolean;
  setTimeEnded: (value: boolean) => void;
  setUserInput: (val: string) => void;
  setActiveWordIndex: (val: number) => void;
  setCorrectWordArray: (val: boolean[]) => void;
  setCorrectCharArray: (val: boolean[]) => void;
  fetchWords: () => void;
  wpm: number;
  setWpm: (val: number) => void;
  Time: number;
  setTime: (value: number | ((prevState: number) => number)) => void;
}) {
  const TOTAL_TIME = 60;

  useEffect(() => {
    if (timeEnded) return;

    let id: number;

    if (startCounting) {
      id = setInterval(() => {
        setTime((prev: number) => {
          if (prev === 1) {
            clearInterval(id);
            setTimeEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(id);
  }, [startCounting, timeEnded]);

  const minutesElapsed = (TOTAL_TIME - Time) / 60;

  setWpm(
    minutesElapsed > 0 ? Number((currectWords / minutesElapsed).toFixed(0)) : 0
  );

  return (
    <div className="flex flex-row justify-end gap-5 rounded-lg font-semibold ">
      <p className="bg-[#18181a] p-5 rounded-lg font-semibold text-xl">
        {" "}
        {wpm} WPM
      </p>
      <p className="bg-[#18181a] p-5 rounded-lg font-semibold text-xl">
        {" "}
        {String(Math.floor(Time / 60)).padStart(1, "0")}:
        {String(Time % 60).padStart(2, "0")}
      </p>

      <button
        className="bg-[#18181a] p-5 rounded-lg cursor-pointer font-semibold text-xl"
        onClick={() => {
          setTimeEnded(false);
          setTime(60);
          setStartCounting(false);
          setUserInput("");
          setWpm(0);
          setActiveWordIndex(0);
          setCorrectWordArray([]);
          setCorrectCharArray([]);
          fetchWords();
        }}
      >
        <RefreshCcw />
      </button>
    </div>
  );
}

export default Timer;
