import React, { useState, useEffect, useRef } from "react";

const StepThree = (props) => {
    useEffect(() => {
        props.setProgressHeight(48);
        document.getElementsByClassName("footer")[0].classList.remove("d-none");
        document.body.className = "steps-3";
    }, []);

    const goToNextStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(4);
        props.setLogoColor("white");
    };

    const goToPreviousStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(2);
        props.setLogoColor("white");
    };

    return (
        <div className="row justify-content-center animated">
            <div className="col-xl-12 col-lg-12 col-md-10 col-sm-8 col-10">
                <p className="text-white text-center mx-2">
                    Parlons un peu de son physique
                </p>
                <p className="h4 text-white text-center font-weight-bold font-italic mx-2 mb-0 !italic"
                style={{fontFamily:"Lato"}}>
                    Quel est le type de corpulence de votre animal ?
                </p>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_1"
                                type="radio"
                                name="fitness"
                                value="tres-maigre"
                                checked={
                                    props.data != null &&
                                    props.data.dogFitness == "tres-maigre"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogFitness: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogFitness: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_1" className=" !h-[230px] !w-full text-[10px]">
                                <img
                                    src="./img/tres-m-white.png"
                                    alt="Tres-Maigre"
                                />
                                <strong className="mb-1">Tres Maigre</strong>Côtes visibles, pas
                                de gras palpable, taille très visible et
                                abdominaux tendus.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6  ">
                        <div className="item ">
                            <input
                            
                                id="answer_2"
                                name="fitness"
                                type="radio"
                                value="maigre"
                                checked={
                                    props.data != null &&
                                    props.data.dogFitness == "maigre"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogFitness: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogFitness: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_2" className=" !h-[230px] !w-full text-[10px]">
                                <img src="./img/maigre.png" alt="Maigre" />
                                <strong className="mb-1">Maigre</strong>Côtes visibles, pas de
                                gras palpable, taille très visible et abdominaux
                                tendus.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_3"
                                name="fitness"
                                type="radio"
                                value="ideal"
                                checked={
                                    props.data != null &&
                                    props.data.dogFitness == "ideal"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogFitness: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogFitness: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_3" className=" !h-[230px] !w-full text-[10px]">
                                <img src="./img/ideal.png" alt="Ideal" />
                                <strong className="mb-1">Idéal</strong>Côtes palpables sans
                                couche graisseuse excessive, ceinture abdominale
                                visible.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_4"
                                name="fitness"
                                type="radio"
                                value="rond"
                                checked={
                                    props.data != null &&
                                    props.data.dogFitness == "rond"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogFitness: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogFitness: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_4" className=" !h-[230px] !w-full !text-[10px]">
                                <img src="./img/rond.png" alt="Rond" />
                                <strong className="mb-1">Rond</strong>Côtes palpables sans couche
                                graisseuse excessive, ceinture abdominale
                                visible.
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="item">
                            <input
                                id="answer_5"
                                name="fitness"
                                type="radio"
                                value="gras"
                                checked={
                                    props.data != null &&
                                    props.data.dogFitness == "gras"
                                        ? true
                                        : false
                                }
                                onChange={(e) => {
                                    if (e.target.value.length == 0)
                                        props.setData({
                                            ...props.data,
                                            dogFitness: null,
                                        });
                                    else
                                        props.setData({
                                            ...props.data,
                                            dogFitness: e.target.value,
                                        });
                                }}
                            />
                            <label htmlFor="answer_5" className=" !h-[230px] !w-full text-[10px]">
                                <img src="./img/boti.png" alt="Gras" />
                                <strong className="mb-1">Gras</strong>Côtes palpables sans couche
                                graisseuse excessive, ceinture abdominale
                                visible.
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 mt-5">
                        <button
                            type="button"
                            className="previous action-button-previous !bg-white"
                            onClick={goToPreviousStep}
                        >
                            &#8249;
                        </button>
                        {props.data != null && props.data.dogFitness != null && (
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

export default StepThree;
