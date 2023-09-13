import React, { useState, useEffect, useRef } from "react";

const StepOne = (props) => {
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([
        { value: "1", text: "Janvier" },
        { value: "2", text: "Février" },
        { value: "3", text: "Mars" },
        { value: "4", text: "Avril" },
        { value: "5", text: "Mai" },
        { value: "6", text: "Juin" },
        { value: "7", text: "Juillet" },
        { value: "8", text: "Août" },
        { value: "9", text: "Septembre" },
        { value: "10", text: "Octobre" },
        { value: "11", text: "Novembre" },
        { value: "12", text: "Décembre" },
    ]);
    useEffect(() => {
        props.setProgressHeight(16);
        document.getElementsByClassName("footer")[0].classList.remove("d-none");
        document.body.className = "steps-1";
        const currentYear = new Date().getFullYear();
        let yearList = [];
        for (var year = currentYear; year >= currentYear - 11; year--)
            yearList.push(year);
        setYears(yearList);
    }, []);

    const goToNextStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(2);
        props.setLogoColor("white");
    };
    return (
        <div className="row justify-content-center animated"  style={{
            fontFamily:"Lato !importance"
        }}>
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9 col-10">
                <p className="text-dark text-center font-weight-light mx-2">
                    Génial. Il va être trop heureux !
                </p>
                <p className="h2 text-dark text-center font-weight-bold font-italic mx-2 italic font-serif">
                    Alors, quel est exactement son petit nom ?
                </p>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <input
                            className="text-brown fs-42 text-center text-capitalize mt-2 w-100"
                            type="text"
                            placeholder="Charlie"
                            value={
                                props.data != null && props.data.dogName != null
                                    ? props.data.dogName
                                    : ""
                            }
                            onChange={(e) => {
                                if (e.target.value.length == 0)
                                    props.setData({
                                        ...props.data,
                                        dogName: null,
                                    });
                                else
                                    props.setData({
                                        ...props.data,
                                        dogName: e.target.value,
                                    });
                            }}
                        />
                    </div>
                </div>
                <div className="row justify-content-center !-mt-5">
                    <div className="col-11 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-lg-0 mb-3">
                                <div className="row flex items-center">
                                    <div className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-6 px-lg-0">
                                        <p className="h2 text-dark font-weight-bold my-0 !text-3xl" style={{
                                            fontFamily:"Lato"
                                        }}>
                                             Cest un 
                                        </p>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-8 col-sm-8 col-6 px-lg-0 !mt-0" style={{
                                            fontFamily:"Lato"
                                        }}>
                                        <div className="profils_box">
                                            <input
                                                className="d-none"
                                                id="answer_0"
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={
                                                    props.data != null &&
                                                    props.data.dogGender ==
                                                        "male"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) => {
                                                    if (
                                                        e.target.value.length ==
                                                        0
                                                    )
                                                        props.setData({
                                                            ...props.data,
                                                            dogGender: null,
                                                        });
                                                    else
                                                        props.setData({
                                                            ...props.data,
                                                            dogGender:
                                                                e.target.value,
                                                        });
                                                }}
                                            />
                                            <label htmlFor="answer_0">
                                                Mâle
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="row flex items-center">
                                    <div className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-6 px-lg-0">
                                        <p className="h2 text-dark font-weight-bold my-0 !text-3xl"
                                         style={{
                                            fontFamily:"Lato"
                                        }}>
                                            Ou une
                                        </p>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-8 col-sm-8 col-6 px-lg-0">
                                        <div className="profils_box">
                                            <input
                                                className="d-none"
                                                id="answer_0_1"
                                                name="gender"
                                                type="radio"
                                                value="femelle"
                                                checked={
                                                    props.data != null &&
                                                    props.data.dogGender ==
                                                        "femelle"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) => {
                                                    if (
                                                        e.target.value.length ==
                                                        0
                                                    )
                                                        props.setData({
                                                            ...props.data,
                                                            dogGender: null,
                                                        });
                                                    else
                                                        props.setData({
                                                            ...props.data,
                                                            dogGender:
                                                                e.target.value,
                                                        });
                                                }}
                                            />
                                            <label htmlFor="answer_0_1">
                                                Femelle
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <p className="h2 text-dark font-weight-bold">
                                    Est né en
                                </p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 px-1">
                                <select
                                    id="month-select"
                                    className="w-100 mb-0   !h-[50px] "
                                    value={
                                        props.data != null &&
                                        props.data.dogBirthMonth != null
                                            ? props.data.dogBirthMonth
                                            : months[0].value
                                    }
                                    onChange={(e) => {
                                        if (
                                            e.target.value.length == 0 ||
                                            months.filter(
                                                (month) =>
                                                    month.value ==
                                                    e.target.value
                                            ).length == 0
                                        )
                                            props.setData({
                                                ...props.data,
                                                dogBirthMonth: null,
                                            });
                                        else
                                            props.setData({
                                                ...props.data,
                                                dogBirthMonth: e.target.value,
                                            });
                                    }}
                                >
                                    {months.map((month, key) => {
                                        return (
                                            <option
                                                key={key}
                                                value={month.value}
                                            >
                                                {month.text}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                                <select
                                    id="year-select"
                                    className="w-100 mb-0 !h-[50px]"
                                    value={
                                        props.data != null &&
                                        props.data.dogBirthYear != null
                                            ? props.data.dogBirthYear
                                            : years[0]
                                    }
                                    onChange={(e) => {
                                        if (
                                            e.target.value.length == 0 ||
                                            years.filter(
                                                (year) => year == e.target.value
                                            ).length == 0
                                        )
                                            props.setData({
                                                ...props.data,
                                                dogBirthYear: null,
                                            });
                                        else
                                            props.setData({
                                                ...props.data,
                                                dogBirthYear: e.target.value,
                                            });
                                    }}
                                >
                                    {years.map((year, key) => {
                                        return (
                                            <option key={key} value={year}>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center !-mt-5">
                    <div className="col-11 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-12 align-self-center">
                                <p className="h2 text-dark font-weight-bold mb-0">
                                    Et pèse environ
                                </p>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="d-flex align-items-center">
                                    <input
                                        type="number"
                                        name="weight"
                                        min="1"
                                        placeholder="10"
                                        className="text-brown fs-42 text-center text-capitalize w-100"
                                        value={
                                            props.data != null &&
                                            props.data.dogWeight != null
                                                ? props.data.dogWeight
                                                : ''
                                        }
                                        onChange={(e) => {
                                            if (
                                                e.target.value.length == 0 ||
                                                e.target.value < 1
                                            )
                                                props.setData({
                                                    ...props.data,
                                                    dogWeight: null,
                                                });
                                            else
                                                props.setData({
                                                    ...props.data,
                                                    dogWeight: e.target.value,
                                                });
                                        }}
                                    />
                                    <p className="h2 text-dark font-weight-bold my-0 py-0 ml-2 align-self-center">
                                        kilos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center !-mt-10">
                    <div className="col-11 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-12 mb-sm-0 mb-3">
                                <div className="profils_box">
                                    <input
                                        className="d-none"
                                        id="answer_0_0_1"
                                        type="radio"
                                        name="sterilized"
                                        value="false"
                                        checked={
                                            props.data != null &&
                                            props.data.dogSterilized == "false"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            if (e.target.value.length == 0)
                                                props.setData({
                                                    ...props.data,
                                                    dogSterilized: null,
                                                });
                                            else
                                                props.setData({
                                                    ...props.data,
                                                    dogSterilized:
                                                        e.target.value,
                                                });
                                        }}
                                    />
                                    <label htmlFor="answer_0_0_1">
                                        Non stérilisé(e)
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className="profils_box">
                                    <input
                                        className="d-none"
                                        id="answer_0_0_2"
                                        name="sterilized"
                                        type="radio"
                                        value="true"
                                        checked={
                                            props.data != null &&
                                            props.data.dogSterilized == "true"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) => {
                                            if (e.target.value.length == 0)
                                                props.setData({
                                                    ...props.data,
                                                    dogSterilized: null,
                                                });
                                            else
                                                props.setData({
                                                    ...props.data,
                                                    dogSterilized:
                                                        e.target.value,
                                                });
                                        }}
                                    />
                                    <label htmlFor="answer_0_0_2">
                                        Stérilisé(e)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.data != null &&
                    props.data.dogName != null &&
                    props.data.dogGender != null &&
                    props.data.dogBirthMonth != null &&
                    props.data.dogBirthYear != null &&
                    props.data.dogWeight != null &&
                    props.data.dogSterilized != null && (
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-sm-8 col-12 mt-5">
                                <button
                                    type="button"
                                    className="action-button w-100  !bg-red-900 !text-white hover:!text-red-900 hover:!bg-white"
                                    onClick={goToNextStep}
                                >
                                    Suivant
                                </button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default StepOne;
