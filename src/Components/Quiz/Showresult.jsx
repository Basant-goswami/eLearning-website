import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Showresult(props) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 3000);
    }, []);

    return (
        <>
            <div className='showresult'>
                <div>
                    <h4>Your Score : {props.result}</h4>
                    <h4>Total Score : {props.total}</h4>
                    <h4>Your Percentage : {props.result * 100 / props.total} %</h4>
                    <button className='btn tryAgain mt-3' onClick={props.tryAgain}>Try Again</button>
                </div>
            </div>
            {visible && (
                <div className="container main-alert">
                    <button type="button" class="btn-close" aria-label="Close" onClick={() => setVisible(false)}></button>
                    <div class="alert alert-success " role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>You successfully completed the assessment. To improve more watch the course related videos.</p>
                        <hr />
                        <p className="mb-0">You need to improve more, please see these videos... </p>
                       <Link to={props.path}> <button type="button" className="btn btn-primary btn-sm">Watch Now</button></Link>
                    </div>
                </div>
            )}
        </>
    )
}
