import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Progress from "../components/Progress";
import StepZero from "../components/StepZero";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import StepFive from "../components/StepFive";
import StepSix from "../components/StepSix";

// import '../styles.css';

export default function PapipetsForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [logoColor, setLogoColor] = useState("white");
  const [progressHeight, setProgressHeight] = useState(1);
  const [data, setData] = useState({
    name: null,
    dog_description_id: null,
    dogName: null,
    dogGender: null,
    dogBirthMonth: "1",
    dogBirthYear: new Date().getFullYear(),
    dogWeight: null,
    dogSterilized: null,
    dogBreed: null,
    dogFitness: null,
    dogBehavior: null,
    dogRecipe: null,
    userEmail: null,
    userPassword: null,
    acceptTerms: null,
  });

  useEffect(() => {
    if (document.body.clientWidth <= 858) setLogoColor("black");
  }, []);

  //

  // const {dogName,dogGender,dogBirthMonth,dogWeight,dogSterilized,dogBreed,dogFitness,dogBehavior,}

  return (
    <>
      <Header currentStep={currentStep} logoColor={logoColor} />
      <div className="body">
        <div id="papipets-form" className="text-center">
          <Progress progressHeight={progressHeight} />
          {currentStep === null || currentStep === 0 ? (
            <StepZero
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 1 ? (
            <StepOne
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 2 ? (
            <StepTwo
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 3 ? (
            <StepThree
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 4 ? (
            <StepFour
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 5 ? (
            <StepFive
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}

          {currentStep === 6 ? (
            <StepSix
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setLogoColor={setLogoColor}
              setProgressHeight={setProgressHeight}
              data={data}
              setData={setData}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer currentStep={currentStep} />
    </>
  );
}

// if (document.getElementById("app")) {
//     ReactDOM.createRoot(document.getElementById("app")).render(
//         <PapipetsForm />
//     );
// }

// if (typeof document !== 'undefined') {
//     // Your client-side code here
//     ReactDOM.createRoot(document.getElementById("app")).render(
//       <PapipetsForm />
//     );
//   }

// document.addEventListener('DOMContentLoaded', function () {
//     ReactDOM.createRoot(document.getElementById("app")).render(
//       <PapipetsForm />
//     );
//   });
