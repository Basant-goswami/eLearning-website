import React, { useState } from 'react'
import "/src/assets/css/quiz.css"
import Showresult from './Showresult';

export default function QuizStructure({ Questions, path}) {

    const [currQues, setCurrQues] = useState(0);
    const [ans, setAns] = useState("");
    const [result, setResult] = useState(0);
    const [isLast, setIsLast] = useState(false);

    let Score = () => {
        if (ans === Questions[currQues].Answer) {
            setResult(result + 1);
        }
    }

    let nextHandle = () => {
        Score();
        setAns("");
        if (currQues < Questions.length - 1) {
            setCurrQues(currQues + 1);
        } else {
            setIsLast(true);
        }
    }

    let resetAll = () => {
        setCurrQues(0);
        setAns("");
        setResult(0);
        setIsLast(false);
    }

    return (
        <>
            <div className="Quiz m-5">
                <h2 className='text-center mb-5 heading'>Quiz page</h2>
                
                <div className="container bg-primary ">
                    {isLast ?
                        <Showresult result={result} total={Questions.length} tryAgain={resetAll} path={path} />
                        : (
                            <>
                                <div className="question">
                                    <span>{currQues + 1}.&nbsp;
                                        <span>{Questions[currQues].Question}</span> </span>
                                </div>
                                <div className="option">
                                    {Questions[currQues].Options.map((el, i) =>
                                        <button className={`btn w-100 my-1 ${ans === el ? "checked" : null}`} key={i} onClick={() => (setAns(el))}>{el}</button>
                                    )}
                                </div>
                                <div className='nextbtn'>
                                    <button className='btn btn-danger text-center' onClick={nextHandle}>Next</button>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </>
    )
}
