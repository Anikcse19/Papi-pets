import React, { useState, useEffect, useRef } from "react";

const StepTwo = (props) => {
    const allDogsType = [
        "Affenpinscher",
        "Airedale Terrier",
        "Akita Inu",
        "American Staffordshire Terrier",
        "Basenji",
        "Basset Hound",
        "Beagle",
        "Berger Allemand",
        "Berger Australien",
        "Berger Belge",
        "Berger de Beauce",
        "Berger de Brie",
        "Berger de Picardie",
        "Berger des Pyrénées",
        "Berger des Shetland",
        "Berger du Caucase",
        "Bichon Frisé",
        "Bichon Maltais",
        "Border Collie",
        "Boston Terrier",
        "Boxer",
        "Braque Allemand",
        "Braque de Weimar",
        "Bulldog Anglais",
        "Bulldog Américain",
        "Bull Terrier",
        "Cairn Terrier",
        "Caniche",
        "Cavalier King Charles",
        "Chihuahua",
        "Cocker Spaniel",
        "Colley",
        "Dalmatien",
        "Doberman",
        "Dogue Allemand",
        "Dogue Argentin",
        "Dogue de Bordeaux",
        "English Springer Spaniel",
        "Epagneul Breton",
        "Epagneul Français",
        "Epagneul Nain Continental",
        "Fox Terrier",
        "Golden Retriever",
        "Greyhound",
        "Husky Sibérien",
        "Jack Russel Terrier",
        "Labrador Retriever",
        "Lévrier Afghan",
        "Lévrier Saluki",
        "Lévrier Whippet",
        "Malinois",
        "Mastiff",
        "Mâtin Espagnol",
        "Parson Russell Terrier",
        "Pékinois",
        "Pointer",
        "Poodle",
        "Rottweiler",
        "Saint Bernard",
        "Samoyède",
        "Schnauzer",
        "Scottish Terrier",
        "Setter Anglais",
        "Setter Gordon",
        "Shar Pei",
        "Shih Tzu",
        "Staffordshire Bull Terrier",
        "Teckel",
        "Terrier Irlandais",
        "Terrier Jack",
        "Terrier Kerry Blue",
        "Terrier Tchèque",
        "Terrier Tibétain",
        "Welsh Corgi",
        "West Highland White Terrier",
        "Yorkshire Terrier",
        "Yorkshire Terrier",
    ];

    const [dogsType, setDogsType] = useState(allDogsType);

    useEffect(() => {
        props.setProgressHeight(32);
        document.getElementsByClassName("footer")[0].classList.remove("d-none");
        document.body.className = "steps-2";
    }, []);

    const onFilterDogsType = (value) => {
        if (value.length == 0) setDogsType(allDogsType);
        else
            setDogsType(
                allDogsType.filter((dogType) =>
                    dogType.toLowerCase().includes(value.toLowerCase())
                )
            );
    };

    const goToNextStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(3);
        props.setLogoColor("white");
    };

    const goToPreviousStep = () => {
        document.getElementsByClassName("footer")[0].classList.add("d-none");
        props.setCurrentStep(1);
        props.setLogoColor("black");
    };

    return (
        <div className="row justify-content-center animated">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9 col-10">
                <p className="text-white text-center mx-2">
                    Et si on parle de sa noble lignée...
                </p>
                <p className="h2 text-white text-center font-weight-bold font-italic mx-2 mb-3 !italic">
                    C'est la plus adorable des ?
                </p>
                <div className="row justify-content-center">
                    <div className="styled-select col-xl-7 col-lg-9 col-md-8 col-sm-9 col-12 !text-white">
                        <input
                            type="text"
                            placeholder="Chercher... "
                            className="search-input w-75 mb-4 mt-2 text-center fs-20 h3 !text-white"
                            onChange={(e) => {
                                onFilterDogsType(e.target.value);
                            }}
                        />
                        <select
                        className="!text-white"
                            name="adorable-level"
                            size="6"
                            value={
                                props.data != null &&
                                props.data.dogBreed != null
                                    ? props.data.dogBreed
                                    : undefined
                            }
                            onChange={(e) => {
                                if (
                                    e.target.value.length == 0 ||
                                    dogsType.filter(
                                        (dogType) => dogType == e.target.value
                                    ).length == 0
                                )
                                    props.setData({
                                        ...props.data,
                                        dogBreed: null,
                                    });
                                else
                                    props.setData({
                                        ...props.data,
                                        dogBreed: e.target.value,
                                    });
                            }}
                        >
                            {dogsType.map((type, key) => {
                                return (
                                    <option  key={key} value={type}>
                                        {type}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="mt-4 px-3 text-white text-center font-weight-light">
                            Si votre chien est issu(e) d'un croisement,
                            sélectionnez sa race dominante.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 mt-5">
                        <button
                            type="button"
                            className="previous action-button-previous !bg-white"
                            onClick={goToPreviousStep}
                        >
                            {" "}
                            &#8249;
                        </button>
                        {props.data != null && props.data.dogBreed != null && (
                            <button
                                type="button"
                                className="action-button  !bg-red-900 !text-white hover:!text-red-900 hover:!bg-white"
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

export default StepTwo;
