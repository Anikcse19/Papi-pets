import React, { useState, useEffect, useRef } from "react";

const Progress = (props) => {
    useEffect(() => {});
    return (
        <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9 col-10 " >
                <div className="progress w-100 !h-[10px]">
                    <div
                        className="progress-bar  progress-bar-animated !bg-red-900 "
                        style={{width : props.progressHeight+"%"}}
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <br></br>
            </div>
        </div>
    );
};

export default Progress;
