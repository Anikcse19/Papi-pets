import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
// import "../../../components/css/order.css"

const DynamicOrder = (params) => {
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState({});
  const location = useLocation();
  const navigate=useNavigate()
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [selected, setSelcted]=useState(null)
  const [error, setError]=useState(null)

  const toggleBorder1 = () => {
    setSelcted(1)
    setIsClicked1(!isClicked1);
    setIsClicked2(false)
    setIsClicked3(false)
    if(!isClicked1){
      setSelcted(1)
    }
    else{
      setSelcted(null)
    }
   
   
   
   
  };
  const toggleBorder2 = () => {
    setSelcted(1)
    setIsClicked2(!isClicked2);
   
    setIsClicked1(false)
    setIsClicked3(false)
    if(!isClicked2){
      
      setSelcted(1)
    }
    else{
      setSelcted(null)
    }
   
   
  };
 
  const toggleBorder3 = () => {
    setSelcted(1)
    setIsClicked3(!isClicked3);
    setIsClicked1(false)
    setIsClicked2(false)
    if(!isClicked3){
      setSelcted(1)
    }
    else{
      setSelcted(null)
    }
   
   
  };
  // console.log(selected)

  // console.log(location.pathname, "router here");
  const { id } = 1;

  let item;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    item = localStorage.getItem("dogs");
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("accessToken")) {
        console.log(localStorage.getItem("accessToken"), "here access token");
        window.location.href = "/login";
      }
    }
  }, []);

  useEffect(() => {
    setDogs(JSON.parse(item));
  }, []);

  useEffect(() => {
    // console.log(dogs);
    const findedDog = dogs.find((dog) => dog.id == id);

    setDog(findedDog);
  }, [dogs, id]);




  const handleClick=()=>{
    if(selected){
      setError(null)
      navigate(`/orders/${1}/orderPlace`)
    }
    else{
      // toast.error("Please Select One Package")
      setError("Veuillez sélectionner un forfait")
    }
   
    
  }
  return (
    <div id="orderPage">
      <Link
        to="/"
        className="p-2 flex items-center text-black gap-1  justify-left "
      >
        <div>
          <svg
            className="w-[20px]  h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <div>Retour</div>
      </Link>

      <div className="text-center ">
        <div className="col-sm-12 col-md-10 col-xl-6 auto " id="logo_home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.73 128.61">
            <defs></defs>
            <g id="a" />
            <g id="b">
              <g id="c">
                <g>
                  <path d="M49.26,42.41c-1.81,3.27-4.6,5.91-8.36,7.92-3.76,2.01-8.42,3.01-13.99,3.01h-10.3v24.48H0V9.62H26.91c5.44,0,10.04,.94,13.8,2.82,3.76,1.88,6.57,4.47,8.45,7.77,1.88,3.3,2.82,7.09,2.82,11.37,0,3.95-.91,7.56-2.72,10.83Zm-16.52-4.52c1.55-1.49,2.33-3.6,2.33-6.32s-.78-4.82-2.33-6.32c-1.55-1.49-3.92-2.23-7.09-2.23h-9.04v17.1h9.04c3.17,0,5.54-.74,7.09-2.23Z" />
                  <path d="M60.48,35.95c2.1-4.21,4.97-7.45,8.6-9.72,3.63-2.27,7.68-3.4,12.15-3.4,3.82,0,7.17,.78,10.06,2.33,2.88,1.55,5.1,3.6,6.66,6.12v-7.68h16.61v54.22h-16.61v-7.68c-1.62,2.53-3.87,4.57-6.75,6.12-2.88,1.55-6.24,2.33-10.06,2.33-4.41,0-8.42-1.15-12.05-3.45-3.63-2.3-6.49-5.57-8.6-9.81-2.11-4.24-3.16-9.15-3.16-14.72s1.05-10.46,3.16-14.67Zm34.01,4.95c-2.3-2.4-5.1-3.6-8.4-3.6s-6.11,1.18-8.4,3.55c-2.3,2.36-3.45,5.62-3.45,9.76s1.15,7.43,3.45,9.86c2.3,2.43,5.1,3.64,8.4,3.64s6.1-1.2,8.4-3.6c2.3-2.4,3.45-5.67,3.45-9.81s-1.15-7.42-3.45-9.81Z" />
                  <path d="M149.92,25.17c2.85-1.55,6.19-2.33,10.01-2.33,4.47,0,8.52,1.13,12.15,3.4,3.63,2.27,6.49,5.51,8.6,9.72,2.1,4.21,3.16,9.1,3.16,14.67s-1.05,10.48-3.16,14.72c-2.1,4.24-4.97,7.52-8.6,9.81-3.63,2.3-7.68,3.45-12.15,3.45-3.76,0-7.08-.78-9.96-2.33-2.88-1.55-5.13-3.56-6.75-6.02v33.42h-16.61V23.61h16.61v7.68c1.62-2.53,3.85-4.57,6.7-6.12Zm13.55,15.69c-2.3-2.36-5.13-3.55-8.5-3.55s-6.11,1.2-8.4,3.6c-2.3,2.4-3.45,5.67-3.45,9.81s1.15,7.42,3.45,9.81c2.3,2.4,5.1,3.6,8.4,3.6s6.12-1.21,8.45-3.64c2.33-2.43,3.5-5.72,3.5-9.86s-1.15-7.4-3.45-9.76Z" />
                  <path d="M193.79,15.4c-1.85-1.72-2.77-3.84-2.77-6.36s.92-4.74,2.77-6.46c1.85-1.72,4.23-2.57,7.14-2.57s5.2,.86,7.04,2.57c1.85,1.72,2.77,3.87,2.77,6.46s-.92,4.65-2.77,6.36c-1.85,1.72-4.2,2.58-7.04,2.58s-5.29-.86-7.14-2.58Zm15.4,8.21v54.22h-16.61V23.61h16.61Z" />
                  <path d="M308.08,93.67c-3.86,3.73-9.73,5.59-17.64,5.59h-13.02v28.27h-8.84V59.81h21.86c7.64,0,13.46,1.85,17.44,5.54s5.98,8.45,5.98,14.28-1.93,10.32-5.78,14.04Zm-6.75-4.91c2.33-2.14,3.5-5.18,3.5-9.13,0-8.36-4.79-12.53-14.38-12.53h-13.02v24.87h13.02c4.92,0,8.55-1.07,10.88-3.21Z" />
                  <path d="M373.13,104.21h-42.56c.32,5.25,2.12,9.34,5.39,12.29,3.27,2.95,7.24,4.42,11.9,4.42,3.82,0,7.01-.89,9.57-2.67,2.56-1.78,4.36-4.16,5.39-7.14h9.52c-1.43,5.12-4.28,9.28-8.55,12.49-4.28,3.21-9.59,4.81-15.93,4.81-5.05,0-9.57-1.13-13.55-3.4-3.98-2.27-7.11-5.49-9.38-9.67-2.27-4.18-3.4-9.02-3.4-14.53s1.1-10.33,3.3-14.48c2.2-4.14,5.29-7.34,9.28-9.57,3.98-2.23,8.57-3.35,13.75-3.35s9.52,1.1,13.41,3.3c3.89,2.2,6.88,5.23,8.99,9.09,2.1,3.85,3.16,8.21,3.16,13.07,0,1.69-.1,3.47-.29,5.34Zm-11.08-15.89c-1.49-2.43-3.51-4.28-6.07-5.54-2.56-1.26-5.39-1.89-8.5-1.89-4.47,0-8.28,1.43-11.42,4.28-3.14,2.85-4.94,6.8-5.39,11.85h33.62c0-3.37-.75-6.27-2.23-8.7Z" />
                  <path d="M395.87,81.57v31.38c0,2.59,.55,4.42,1.65,5.49,1.1,1.07,3.01,1.6,5.73,1.6h6.51v7.48h-7.97c-4.92,0-8.62-1.13-11.08-3.4-2.46-2.27-3.69-5.99-3.69-11.17v-31.38h-6.9v-7.29h6.9v-13.41h8.84v13.41h13.89v7.29h-13.89Z" />
                  <path d="M428.32,126.31c-3.24-1.39-5.8-3.34-7.68-5.83-1.88-2.49-2.91-5.36-3.11-8.6h9.13c.26,2.66,1.51,4.83,3.74,6.51,2.23,1.69,5.17,2.53,8.79,2.53,3.37,0,6.02-.74,7.97-2.23,1.94-1.49,2.91-3.37,2.91-5.64s-1.04-4.06-3.11-5.2c-2.07-1.13-5.28-2.25-9.62-3.35-3.95-1.04-7.17-2.09-9.67-3.16-2.49-1.07-4.63-2.65-6.41-4.76-1.78-2.1-2.67-4.87-2.67-8.31,0-2.72,.81-5.21,2.43-7.48,1.62-2.27,3.92-4.06,6.9-5.39,2.98-1.33,6.38-1.99,10.2-1.99,5.89,0,10.65,1.49,14.28,4.47,3.63,2.98,5.57,7.06,5.83,12.24h-8.84c-.19-2.78-1.31-5.02-3.35-6.7-2.04-1.68-4.78-2.53-8.21-2.53-3.18,0-5.7,.68-7.58,2.04-1.88,1.36-2.82,3.14-2.82,5.34,0,1.75,.57,3.19,1.7,4.32,1.13,1.13,2.56,2.04,4.28,2.72,1.71,.68,4.1,1.44,7.14,2.28,3.82,1.04,6.93,2.06,9.33,3.06,2.4,1,4.45,2.51,6.17,4.52,1.72,2.01,2.61,4.63,2.67,7.87,0,2.91-.81,5.54-2.43,7.87-1.62,2.33-3.9,4.16-6.85,5.49-2.95,1.33-6.33,1.99-10.15,1.99-4.08,0-7.74-.7-10.98-2.09Z" />
                  <path d="M231.8,70.29c-.12,.4-.06,.83,.16,1.18,1.02,1.32,2.69-.57,1.73-1.67-.46-.87-1.72-.33-1.89,.49Z" />
                  <path d="M211.61,126.62c4.51,1.3,8.86,1.62,13.52,1.94,10.31,.11,20.85,.03,31.74-.33,.3-.04,.55-.25,.65-.53,.76-1.81,.64-3.87-.35-5.57-.34-.57-.88-1.02-1.06-1.67-.48-1.68-.49-3.59-.56-5.32-.14-3.53-.03-7.06,.06-10.58,1.31-5.56,1.22-11.51-.55-16.96h0c.32-.25,.57-.58,.71-.95,.1-.13,.16-.29,.17-.45,.19-2.41-.02-4.92-.24-7.32h0c-.44-4.82-1.37-9.59-2.77-14.23-.55-1.82-.93-4.08-3.05-4.61-3.24-.8-6.88-.82-10,.41-2.09,.82-3.8,2.21-5.73,3.32-1.81,1.02-3.7,1.89-5.65,2.61-1.89,.77-4.04,1.27-5.6,2.65-1.5,1.22-.75,4.36-.43,5.91,.44,2.11,1.33,4.37,3.36,5.4,2.28,1.16,5.3,.75,7.77,.68,1.04-.03,2.07-.09,3.11-.19-10.27,10.59-18.82,26.36-13.47,41.24h0c-.11,.01-.21,.05-.31,.1-5.75-.16-12.3-1.49-15.62-6.68-2.37-3.7-2.51-11.48,2.94-12.63,1.64-.13,3.58,.15,4.45-1.57,.46-.92,.14-1.98-.54-2.71h0c.63-.07,1.27-.09,1.91-.06,1.03,.05,2.07,.43,3.06-.04,1.7-.8,1.05-2.52,.66-3.96,1.17-.25,2.34-.5,3.5-.78,.99-.24,1.68-.61,2.09-1.55,.82-1.84,.18-3.69-1.08-5.15-3.63-4.14-11.23-4.35-15.83-1.92-17.07,9.5-17.67,36.3,3.13,41.53h0Zm19.72-47.07c1.55-1.12,2.47-2.86,2.95-4.67,.25-.95-1.22-1.35-1.47-.4-.6,2.49-2.11,4.39-4.65,4.94-2.91-.28-3.95-3.05-4.37-5.57,.28-.34,.64-.59,1.04-.75,1.9-.69,2.08-2.7,1.53-4.39,2.5-.91,5.03-1.79,7.4-3,3.32-1.82,6.03-4.26,9.99-4.5-3.31,3.14-3.65,12.99-3.86,17.55-2.85,.5-5.66,.7-8.57,.8h0Zm-5.56,20.31c2.9-7.27,7.76-13.63,13.07-19.31,.35-.05,.7-.11,1.05-.18,.13,1.92-.31,4.22,.83,5.9,.91,1.2,2.68,1.34,4.05,1.56,2.99,.47,6.06,.63,9.06,.25,1.79,7.28,1.2,12.6-.58,19-.41,.72-1.13,.31-1.31-.4-.11-4.17-.29-8.37-.87-12.46-.12-.63-1.07-.46-1.09,.15,.06,4.49,.53,8.99,.49,13.48,.04,3.34,.02,6.69-.11,10.03-.04,.92-.15,1.87,.01,2.78,0,.05,0,.09-.01,.14h0c-.04,.13-.04,.27,0,.4-.02,.09,0,.19,.05,.27,.47,.73,1.15,1.27,1.55,2.07,.41,.89,.83,2.36-.22,2.9-.24,.03-.48,.09-.71,.18-.99,.01-1.81,.07-2.8-.02,.6-2.17-.37-4.46-2.63-5.31,.77-6.85,1.45-13.95,.77-20.82-.09-.47-.9-.49-.97,0-.31,2.43-.11,4.91-.28,7.35-1.75-3.64-6.56-3.6-9.5-1.47h0c-1.21,.85-2.32,1.83-3.31,2.92-1.04,1.1-2.21,2.32-2.91,3.67-.34,.65,.48,1.33,1.03,.8,1.7-1.8,3.17-3.85,5.14-5.38,5.05-4.04,9.59-1.33,8.71,5.03-.28,2.67-1.45,5.15-2.73,7.47h0c-1.15,.06-2.3,.18-3.44,.36-.82,.12-1.71,.12-2.34,.72-1.4,2.46,12.65-2.73,10.79,4.31-3.78,.16-7.57,.3-11.36,.45-2.58-.03-7.22,.24-8.86-2.2-4.12-8.09-3.92-16.34-.56-24.66h0Zm-23.93-6.54c2.83-4.22,6.91-7.39,12.02-8.1,3.67-.28,8.16,.48,10.02,4.05,1.21,4.94-5.73,2.75-5.7,4.66,.26,1.55,1.71,3.67-1.1,3.19h0c-1.72-.2-3.46-.1-5.14,.3-.63,.14-.64,.81-.31,1.18,.17,.52,.94,.39,1.34,.66,.85,.59,.77,1.65-.22,2.01-.91,.3-1.9-.21-2.82,.07-.95,.06-1.85,.56-2.56,1.04-3.37,1.42-4.78,8-4.87,11.31h0c-.1,.38-.23,.76-.38,1.13-1.33,1.21-2.84,.1-3.6-1.27-2.28-6.52-.66-14.47,3.33-20.22h0Z" />
                  <path
                    className="d"
                    d="M250.77,51.6c.11,.17,.31,.26,.5,.24,.2-.03,.37-.17,.43-.36,2.27-5.75,9.45-7.06,12.56-12.17,5.43-9.41-8.2-16.64-12.91-6.73-4.5-10.25-18.49-4.77-15.24,5.78,2.39,6.74,10.74,7.8,14.65,13.25h0Z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="col-sm-12 col-md-10 col-xl-6 auto section one">
        <p className="text-black">
          Votre offre découverte contient 7 jours d'alimentation pour petName
          afin de l'aider à faire sa transition.
        </p>
      </div>

      <div className="col-sm-12 col-md-10 col-xl-6 auto section two">
        <p className="text-center">Portion journalière recommandée</p>
        <h2 className="msg_thanks text-black">
          {dog?.name} à Besoin de calorieMeasure Calories par jour
        </h2>
        <p className="text-center">Soit foodPrice de Papipets</p>
      </div>

      {/* <!-- partial:index.partial.html -->     */}
      <div className="col-sm-12 col-md-12 col-xl-12 auto section three text-center mt-5 w-[70%]">
        <h2 className="font-bold">
          Sélectionnez 1, 2 ou 3 recettes parmi celles proposées ci-dessous.
        </h2>
        <p>
          Recettes fraîches, sans conservateur, parfaitement équilibrées,
          formulées par un vétérinaire, nutritionniste.
        </p>
        <p className="w-[80%] text-center mx-auto">
          Des repas frais, sains et délicieux élaborés par notre vétérinaire
          nutritionniste. Des repas frais sont cuisinés avec de la viande
          fraîche et des ingrédients naturels, sans colorants ni conservateurs.
        </p>
        {
        error && <p className="text-red-700 text-2xl">{error}</p>
      }

        <div className="col-12 select_recet flex gap-2  justify-center">
       
          <div className={`product_card cursor-pointer mb-2 bg-gray-200 rounded-md p-1 hover:border-slate-800 ${isClicked1 ? 'border-2 border-slate-800' : ''}`}
           onClick={()=>{
            toggleBorder1()
            
           }}>
            <div className="w-[90%] mx-auto rounded-md overflow-hidden">
              <img
                src="https://res.cloudinary.com/japhy/image/upload/c_scale,f_auto,q_auto,w_300/v1661365814/mabrouk/img/profile-builder/pack_croquette-05_mqpr52.png"
                alt="produit image"
                
              />
            </div>

            <div className="content_product p-1">
              <div >
                <div className="flex justify-between mt-1 ">
                  <p className="w-[50%] !text-left">Abonnement hebdomadaire</p>
                  <p className="">7 jours</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-extrabold text-black">
                    <strong>500g / jour</strong>
                  </p>
                  <p className="font-extrabold text-black">
                    <strong>6.5 TND / Jour</strong>
                  </p>
                </div>
              </div>
              <div className="text-left p-2 ml-2 ">
                <a className="text-black font-semibold" href="#">En savoir plus</a>
              </div>
            </div>
          </div>

          <div className={`product_card cursor-pointer mb-2 bg-gray-200 rounded-md p-1 hover:border-slate-800 ${isClicked2 ? 'border-2 border-slate-800' : ''}`}
            onClick={()=>{
              toggleBorder2()
              
             }}>
            <div className="w-[90%] mx-auto rounded-md overflow-hidden">
              <img
                src="https://res.cloudinary.com/japhy/image/upload/c_scale,f_auto,q_auto,w_300/v1661365814/mabrouk/img/profile-builder/pack_croquette-05_mqpr52.png"
                alt="produit image"
                
              />
            </div>

            <div className=" ">
              <div >
                <div className="flex justify-between mt-1 ">
                  <p className=" !text-left w-[50%]">Abonnement bihebdomadaire</p>
                  <p className="">14 jours</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-extrabold text-black">
                    <strong>500g / jour</strong>
                  </p>
                  <p className="font-extrabold text-black">
                    <strong>6.5 TND / Jour</strong>
                  </p>
                </div>
              </div>
              <div className="text-left p-2 ml-2 ">
                <a className="text-black font-semibold" href="#">En savoir plus</a>
              </div>
            </div>
          </div>

          <div className={`product_card cursor-pointer mb-2 bg-gray-200 rounded-md p-1 hover:border-slate-800 ${isClicked3 ? 'border-2 border-slate-800' : ''}`}
           onClick={()=>{
            toggleBorder3()
            
           }}>
            <div className="w-[90%] mx-auto rounded-md overflow-hidden">
              <img
                src="https://res.cloudinary.com/japhy/image/upload/c_scale,f_auto,q_auto,w_300/v1661365814/mabrouk/img/profile-builder/pack_croquette-05_mqpr52.png"
                alt="produit image"
                
              />
            </div>

            <div className="content_product p-1">
              <div >
                <div className="flex justify-between mt-1 ">
                  <p className="w-[50%] !text-left">Abonnement mensuel</p>
                  <p className="">30 jours</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-extrabold text-black">
                    <strong>500g / jour</strong>
                  </p>
                  <p className="font-extrabold text-black">
                    <strong>6.5 TND / Jour</strong>
                  </p>
                </div>
              </div>
              <div className="text-left p-2 ml-2 ">
                <a className="text-black font-semibold" href="#">En savoir plus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto rounded-lg !bg-orange-200 !p-2">
        <div className="col-sm-12 col-md-10 col-xl-12 auto section four flex flex-col items-center mt-5 w-[600px] mx-auto">
          <h2>Nos délicieuses recettes</h2>
          <p>
            Des repas frais, sains et délicieux élaborés par notre vétérinaire
            nutritionniste. Des repas frais sont cuisinés avec de la viande
            fraîche et des ingrédients naturels, sans colorants ni
            conservateurs.
          </p>
          <img
            className="img_repas w-[100px]"
            src="/img/repas.png"
            alt="image menue"
          />
          <p>
            <strong>Notre recette à base de volaille</strong>
          </p>
          <p>Poulet & riz blanc & petits légumes</p>
          <p>
            Cette recette diététique à base de viande blanche maigre est
            caractérisée par sa facilité de digestion et d’absorption, elle
            couvre les besoins nutritifs de votre chien en apportant tous les
            éléments essentiels de son bien-être, à savoir les protéines de
            qualité et les acides gras indispensables.{" "}
          </p>
        </div>
      </div>

      <div className="col-sm-12 col-md-10 col-xl-6 auto mt-5 section five">
        <h2>Des bienfaits adaptés à ces besoins</h2>
        <p className="mt-5">
        {dog?.name} est un chien senior, il a donc besoin d’une recette contenant
          des protéines animales de qualité et allégée en matières grasses pour
          maintenir un poids de forme idéal. Nous adapterons la taille de sa
          croquette afin de garantir une bonne mastication.{" "}
        </p>
        <div className="text-center">
          <ul className="mt-5  sante_tt">
            <li className="!flex !flex-row items-center">
              <img
                src="/img/sante_articulaire.png"
                alt="santé articulaire"
                className=" !w-[100px] !m-0 !p-0"
              />
              <p className=""> Santé articulaire</p>
            </li>
            <li className="!flex !flex-row items-center">
              <img
                src="/img/bonne_energie.png"
                alt="santé articulaire"
                className=" !w-[100px] !m-0 !p-0"
              />
              <p className="">Bonne énergie</p>
            </li>
            <li className="!flex !flex-row items-center">
              <img
                src="/img/proteines_de_haute_qualite.png"
                alt="santé articulaire"
                className=" !w-[100px] !m-0 !p-0"
              />
              <p className="">
                Protéines animales de haute qualité
              </p>
            </li>
            <li className="!flex !flex-row items-center">
              <img
                src="/img/beaute_du_ploi_et_de_la_peau.fccbaba.png"
                alt="santé articulaire"
                className=" !w-[100px] !m-0 !p-0"
              />
              <p className="">
                Protéines animales de haute qualité
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-12 col-md-12 col-xl-12 auto p-3 mt-3  section six">
        <div className="top_section">
          <h2>Nos engagements</h2>
        </div>
        <div className="bas_section !flex !text-base">
          <div className=" ingredients flex   gap-2 bg-transparent">
            <div className="flex flex-col gap-2">
            <div className="ig1 bg-transparent">
              <img
                src="/img/sante_articulaire.png"
                alt="santé articulaire"
                className="img_sante w-[80px]"
              />
              <h3 className="text-xl !text-left">Ingrédients d’origine naturelle</h3>
              <p className="pl-0">
                Nos recettes sont formulées sans colorants, sans émulsifiants et
                sans sucres ajoutés.
              </p>
            </div>
            <div className="ig2">
              <img
                src="/img/sante_articulaire.png"
                alt="santé articulaire"
                className="img_sante w-[80px]"
              />
              <h3  className="text-xl !text-left">Formulé sans gluten</h3>
              <p className="pl-0">
                Nos recettes contiennent du riz, source d'amidon la plus digeste
                pour les animaux et sont garanties sans gluten.
              </p>
            </div>
            </div>
            <div className="flex flex-col gap-2">
            <div className="ig3">
              <img
                src="/img/sante_articulaire.png"
                alt="santé articulaire"
                className="img_sante w-[80px]"
              />
              <h3  className="text-xl !text-left">Taux élevé en protéines</h3>
              <p className="pl-0">
                Toutes nos recettes contiennent minimum 30% de protéines, dont
                80% de protéines animales minimum.
              </p>
            </div>
            <div className="ig4">
              <img
                src="/img/sante_articulaire.png"
                alt="santé articulaire"
                className="img_sante w-[80px]"
              />
              <h3  className="text-xl !text-left">Une fabrication tunisienne</h3>
              <p className="pl-0">
                Nos produits sont fabriquées dans nos usines partenaires en
                tunisie{" "}
              </p>
            </div>
            </div>
           
            
          </div>
          <div className="img_inge rounded-md overflow-hidden !self-end">
            <img src="/img/dogs.webp" alt="image_ingredients" />
          </div>
        </div>
      </div>
      <div className="espace"></div>
     
      <div className="footer_btn !w-full  !mx-auto !text-center">
        <div className="center_btn !w-full ">
          {/* <Link to={`/orders/${1}/orderPlace`}> */}
           
            <button onClick={handleClick} type="button"  className="btn_tester font-normal !mt-3  rounded-3xl !bg-red-900 !w-[20%] ">
              Je teste ce menu à Rate Tnd
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DynamicOrder;
