interface IProp {
  wpm: number;
  correctWords: number;
  InCorrectWords: number;
  showResualt: boolean;
}

const Result = ({ wpm, correctWords, InCorrectWords, showResualt }: IProp) => {

  const totalWords = correctWords + InCorrectWords;
  const accuracy =
    totalWords > 0 ? Math.round((correctWords / totalWords) * 100) : 0;
  return (
    <div className="flex flex-col">
      <h2 className="text-center mb-3 font-bold text-2xl">
        {showResualt ? wpm : 0} WPM
      </h2>
      <div className="flex w-full justify-between bg-[#18181a] rounded-md">
        <h5 className="inline-block  m-3">Raw WPM</h5>
        <p className="inline-block  m-3">{showResualt ? wpm : 0}</p>
      </div>
      <div className="flex w-full justify-between rounded-md">
        <h5 className="inline-block  m-3">Accuracy</h5>
        <p className="inline-block  m-3">{showResualt ?  accuracy +" %" : "-"} </p>
      </div>
      <div className="flex w-full justify-between bg-[#18181a] rounded-md">
        <h5 className="inline-block   m-3">Correct Words</h5>
        <p className="inline-block  m-3">{showResualt ? correctWords : "-"}</p>
      </div>
      <div className="flex w-full justify-between  rounded-md">
        <h5 className="inline-block   m-3">Incorrect Words</h5>
        <p className="inline-block    m-3">
          {showResualt ? InCorrectWords : "-"}
        </p>
      </div>
    </div>
  );
};

export default Result;
