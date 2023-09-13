import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const bearerToken = localStorage.getItem("accessToken"); // Replace with your actual token
// Replace with your API endpoint URL

const UserDashboard = () => {
  let item;
  let namee;
  const [dog, setDog] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [currentStep,setCurrentStep]=useState(0)

  if (typeof window !== "undefined") {
    // Perform localStorage action
    item = localStorage.getItem("accessToken");
    namee = localStorage.getItem("name");
  }

  const apiUrl = `https://papipetsbackend.sanctifysoft.com/api/dog-profile?page=${page}`;
  useEffect(() => {
    if (item) {
      const config = {
        headers: {
          Authorization: `Bearer ${item}`,
          // You can also include other headers here if needed
        },
      };
      axios.get(apiUrl, config).then((response) => {
        // Handle the API response here
        // console.log(response.data);
        setTotalPage(response.data.data.last_page);
        // console.log(response.data.data.last_page);
        setDog(response.data.data.data);
        localStorage.setItem("dogs", JSON.stringify(response.data.data.data));
      });

      // console.log(totalPage);
    }
  }, [page]);

  return (
    <div className=" mx-[100px] h-screen py-3">
      <div className="row">
        <div className="col-8">
          <div className="bg-gray-300 w-100 h-[300px] rounded-lg">
            <div className="p-5 !text-left">
              <p className="text-3xl font-bold !text-left text-black">Bonjour, {namee}</p>
              <p className="mt-4 !text-left mb-8 !w-[80%]">
                Ici, vous avez la possibilité de passer des commandes adaptés
                pour votre chien tout en suivant son évolution et en explorant
                l'historique de vos activités avec lui.
              </p>
              <div className="bg-orange-600 text-white !text-left inline-block ml-6 px-16 py-1 rounded-2xl">
                <Link to="/descriptionForm" className="no-underline text-white">Ajouter un chien</Link>
              </div>
            </div>
          </div>
          <div className="row gap-2 m-5">
            <h4 className="-ml-10 mb-4  !text-left">Mes fideles compagnons</h4>
            {dog &&
              dog.map((singleDog) => (
                <div className="col bg-white text-center p-2">
                  <p className="font-bold text-center font-semibold text-xl text-black">
                    {singleDog.name}
                  </p>
                  <button className="!bg-yellow-200 px-6 w-1/2 py-1  text-black mb-4 rounded-2xl"
                  style={{
                    border:"1px solid black",
                    fontWeight:"300"
                  }}>
                    Modifier
                  </button>
                  <div className="text-center flex justify-center mb-4">
                    <img
                      src="./img/dog-1.jpg"
                      alt=""
                      className="rounded-full w-[100px]"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio ullam eveniet praesentium facere minima accusantium.
                  </p>
                  <button className="bg-orange-600 text-white font-bold px-10 py-1 rounded-2xl !w-[80%]"
                  
                  >
                    <Link to={`/orders/${singleDog.id}`} className="!text-white !no-underline font-normal " >Commandez</Link>
                  </button>
                </div>
              ))}
          </div>
          <div className="mb-5 ml-16 flex flex-wrap gap-1 ">
            {totalPage &&
              [...Array(totalPage).keys()].map((index) => (
                <button
                  style={{
                    width: "40px",
                    color: "black",
                    borderRadius: "20px",
                    textAlign: "center",
                    paddingRight: 0,
                    paddingLeft: 0,
                    fontWeight:"400",
                    fontSize:"12px"
                  }}
                  className={
                    page == index + 1 ? "!bg-black !text-white" : "!bg-gray-200"
                  }
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
        <div className="col-4">
          <div className="bg-white min-h-[400px] rounded-lg p-3">
            <h5 className="text-left"> Historique desw commandes</h5>
            <hr />
            {/* dog-1  */}
            <div className="bg-orange-300 w-[100%] h-[80px] rounded-[100px] mb-5">
              <div className="flex justify-between">
                <div className="text-black px-20 flex flex-col justify-center gap-2 relative">
                  <div className="absolute rounded-full overflow-hidden w-[100px] left-0 top-0 -mt-3 -ml-10">
                    <img src="./img/dog-1.jpg" alt="" />
                  </div>
                  <p className="text-black font-bold text-lg mt-2 !pl-0">
                    Luna
                  </p>
                  <span className="text-center text-xs  -mt-3">* 7 Repos</span>
                </div>
                <div className="px-3 flex flex-col text-black justify-center mt-3">
                  <div className="self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <p className="text-black !pl-0">35 TND</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-300 w-[100%] h-[80px] rounded-[100px] mb-5">
              <div className="flex justify-between">
                <div className="text-black px-20 flex flex-col justify-center gap-2 relative">
                  <div className="absolute rounded-full overflow-hidden w-[100px] left-0 top-0 -mt-3 -ml-10">
                    <img src="./img/dog-1.jpg" alt="" />
                  </div>
                  <p className="text-black font-bold text-lg mt-2 !pl-0">
                    Jack
                  </p>
                  <span className="text-center  text-xs -mt-3">* 10 Repos</span>
                </div>
                <div className="px-3 flex flex-col text-black justify-center mt-3">
                  <div className="self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <p className="text-black !pl-0">55 TND</p>
                </div>
              </div>
            </div>

            {/* order button  */}
            <div className="bg-orange-600 font-normal text-yellow-200 font-bold px-4 py-2 rounded-3xl text-center">
              Mes Commandes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
