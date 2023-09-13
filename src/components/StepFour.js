import React, { useState, useEffect, useRef } from "react";

const StepFour = (props) => {
    useEffect(() => {
        props.setProgressHeight(64);
        document.getElementsByClassName("footer")[0].classList.remove("d-none");
        document.body.className = "steps-4";
    }, []);

    const goToNextStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(5);
        props.setLogoColor("black");
    };

    const goToPreviousStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(3);
        props.setLogoColor("white");
    };

    return (
        <div className="row justify-content-center animated">
            <div className="col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10">
                <p className="text-white text-center mx-2">
                    Et au niveau de son mode de vie...
                </p>
                <p className="h4 text-white text-center font-weight-bold font-italic mx-2 mb-0">
                    Votre chien est-il ?
                </p>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_1_2"
                                type="radio"
                                name="behavior"
                                value="flemmard"
                                checked={
                                    props.data != null &&
                                    props.data.dogBehavior == "flemmard"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_1_2" className="!h-[200px] !text-[8px]">
                                <img className="!-mt-3"
                                    src="./img/mode/flemmard.png"
                                    alt="Flemmard"
                                />
                                <strong className="!-mt-3">Flemmard</strong>Préfère se prélasser
                                dans son panier, peu actif.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_2_2"
                                name="behavior"
                                type="radio"
                                value="active"
                                checked={
                                    props.data != null &&
                                    props.data.dogBehavior == "active"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_2_2" className="!h-[200px] !text-[8px]">
                                <img className="!-mt-3" src="./img/mode/active.png" alt="active" />
                                <strong className="!-mt-3">Active</strong>Aime jouer et se promène
                                de temps à autre...
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_3_3"
                                name="behavior"
                                type="radio"
                                value="sportif"
                                checked={
                                    props.data != null &&
                                    props.data.dogBehavior == "sportif"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_3_3" className="!h-[200px] !text-[8px]">
                                <img className="!-mt-3"
                                    src="./img/mode/sportif-chien.png"
                                    alt="Sportif"
                                />
                                <strong className="!-mt-3">Sportif</strong>Promenade et jeux en
                                plein air quotidiens.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_4_4"
                                name="behavior"
                                type="radio"
                                value="athlete"
                                checked={
                                    props.data != null &&
                                    props.data.dogBehavior == "athlete"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogBehavior: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_4_4" className="!h-[200px] !text-[8px]">
                                <img  className="!-mt-3"
                                    src="./img/mode/athlet.png"
                                    alt="Athlète"
                                />
                                <strong className="!-mt-3">Athlète</strong>Promenade et jeux en
                                plein air plus de 2h par jour.
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12  mt-5">
                        <button
                            type="button"
                            className="previous action-button-previous !bg-white"
                            onClick={goToPreviousStep}
                        >
                            &#8249;
                        </button>
                        {props.data != null &&
                            props.data.dogBehavior != null && (
                                <button
                                    type="button"
                                    className="next action-button  !bg-red-900 !text-white hover:!text-red-900 hover:!bg-white"
                                    onClick={goToNextStep}
                                >
                                    Suivant
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepFour;
