import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const StepFive = (props) => {

  const navigate=useNavigate()
  useEffect(() => {
    props.setProgressHeight(82);
    document.getElementsByClassName("footer")[0].classList.remove("d-none");
    document.body.className = "steps-5";
  }, [props]);

  const goToNextStep = () => {
    console.log("from set current step 6 upper");
    document.getElementsByClassName("footer")[0]?.classList.add("d-none");
    props.setCurrentStep(6);
    props.setLogoColor("black");
    console.log("from set current step 6");
  };

  const goToPreviousStep = () => {
    document.getElementsByClassName("footer")[0].classList.add("d-none");
    props.setCurrentStep(4);
    props.setLogoColor("white");
  };

  const handleSuivat = () => {
    // fetch('https://papipetsbackend.sanctifysoft.com/api/dog-description',{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         dogName:  props.data.dogName,
    //         dogGender:props.data.dogGender,
    //         dogBirthMonth:props.data.dogBirthMonth,
    //         dogWeight:props.data.dogWeight,
    //         dogSterilized:props.data.dogSterilized,
    //         dogBreed:props.data.dogBreed,
    //         dogFitness:props.data.dogFitness,
    //         dogBehavior:props.data.dogBehavior,
    //         dogRecipe:props.data.dogRecipe
    //       }),
    // }).then(res=>{
    //     res.json()
    // }).then(data=>{
    //     console.log(data)
    // }).then(err=>{
    //     console.log(err)
    // })

    axios
      .post("https://papipetsbackend.sanctifysoft.com/api/dog-description", {
        name: props.data.dogName,
        gender: props.data.dogGender,
        dob_month: props.data.dogBirthMonth,
        dob_year: props.data.dogBirthYear,
        weight: props.data.dogWeight,
        is_sterilized: props.data.dogSterilized,
        dominant_breed_type: props.data.dogBreed,
        body_type: props.data.dogFitness,
        nature: props.data.dogBehavior,
        food_type: props.data.dogRecipe,
      })
      .then(function (response) {
        // console.log(response.data);
        props.setData({
          ...props.data,
          dog_description_id: response?.data?.dogDesceiption?.id,
        });
        localStorage.setItem(
          "dogDescriptionId",
          response?.data?.dogDesceiption?.id
        );
        const token=localStorage.getItem("accessToken")
        // console.log("likhci",token)
        if(token){
          navigate('/')
        }
        goToNextStep();
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  // console.log("step 5", props);

  return (
    <div className="row justify-content-center animated">
      <div className="col-xl-12 col-lg-12 col-md-10 col-sm-10 col-10">
        <p className="h4 text-dark text-center font-weight-bold font-italic mx-2 mb-0 mt-4 !text-[18px]">
          Choisissez la base de nourriture parfaite pour votre fidèle compagnon
        </p>
        <div className="row justify-content-center">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
            <div className="item">
              <input
                id="answer_1_2_3"
                type="radio"
                name="recette"
                value="poulet"
                checked={
                  props.data != null && props.data.dogRecipe == "poulet"
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (e.target.value.length === 0)
                    props.setData({
                      ...props.data,
                      dogRecipe: null,
                    });
                  else
                    props.setData({
                      ...props.data,
                      dogRecipe: e.target.value,
                    });
                }}
              />
              <label htmlFor="answer_1_2_3">
                <img
                  src="./img/recettes/papipets-poulet_1.png"
                  alt="Poulet"
                  className="img_recette"
                />
                <strong>Poulet</strong>
              </label>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
            <div className="item">
              <input
                id="answer_2_2_3"
                name="recette"
                type="radio"
                value="boeuf"
                checked={
                  props.data != null && props.data.dogRecipe == "boeuf"
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (e.target.value.length == 0)
                    props.setData({
                      ...props.data,
                      dogRecipe: null,
                    });
                  else
                    props.setData({
                      ...props.data,
                      dogRecipe: e.target.value,
                    });
                }}
              />
              <label htmlFor="answer_2_2_3">
                <img
                  src="./img/recettes/papipets-beauf-2.png"
                  alt="Boeuf"
                  className="img_recette"
                />
                <strong>Boeuf</strong>
              </label>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
            <div className="item">
              <input
                id="answer_3_3_3"
                name="recette"
                type="radio"
                value="cheval"
                checked={
                  props.data != null && props.data.dogRecipe == "cheval"
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (e.target.value.length == 0)
                    props.setData({
                      ...props.data,
                      dogRecipe: null,
                    });
                  else
                    props.setData({
                      ...props.data,
                      dogRecipe: e.target.value,
                    });
                }}
              />
              <label htmlFor="answer_3_3_3">
                <img
                  src="./img/recettes/papipets_equine-1.png"
                  alt="Équine"
                  className="img_recette"
                />
                <strong>Équine</strong>
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
            {props.data != null && props.data.dogRecipe != null && (
              <button
                type="button"
                className="next action-button  !bg-red-900 !text-white hover:!text-red-900 hover:!bg-white"
                onClick={handleSuivat}
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

export default StepFive;
