import React, { useState, useEffect, useRef } from "react";

const StepZero = (props) => {
    useEffect(() => {
        document.body.className = "steps-0";
        props.setProgressHeight(1);
    }, []);

    const goToNextStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(1);
        props.setLogoColor("black");
    };
    return (
        <div className="row justify-content-center ">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8 px-0">
                <div className="card py-5 !max-h-[400px]">
                    <h2 className="card-title text-white !text-[20px] font-weight-bold align-middle my-0 mx-2">
                        Une meilleure nourriture
                    </h2>
                    <div className="card-body my-5 py-0 mx-2">
                        <p className="text-white !text-[10px] font-weight-light">
                            Cela ne prendra que 3 minutes{" "}
                            <span className="font-weight-bold !font-extrabold">par chien</span>.
                        </p>
                        <h3 className="text-white font-weight-bold my-0 !text-[16px]">
                            Déterminons votre plan de repas, les recettes
                            recommandées et le prix hebdomadaire
                        </h3>
                    </div>
                    <div className="card-body py-0 mx-2">
                        <p className="text-white font-weight-light my-0">
                            Vous souhaitez créer un programme pour votre{" "}
                            <span className="font-weight-bold">chien?</span>
                        </p>
                        <div className="mt-3 ">
                            <button
                                type="button"
                                className="action-button !text-base !bg-red-900  !text-white hover:!bg-red-700"
                                onClick={goToNextStep}
                            >
                                Commencer
                            </button>
                            <p className="text-white my-0 mt-2 font-weight-light !pb-3">
                                Déjà membre?
                                <a
                                    className="text-brown font-weight-bold" style={{
                                        textDecoration:"none", marginBottom:"10px"
                                    }}
                                    href="https://app.papipets.tn/login"
                                >
                                    &nbsp;&nbsp;Connectez-vous.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepZero;
