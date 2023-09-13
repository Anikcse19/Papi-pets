import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const StepSix = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [fieldError,setFieldError]=useState(null)
  const [dogDescriptionId, setDogDescriptionId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const emailPattern = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,3}$/;

  // const [showPasswordRules, setShowPasswordRules] = useState(false);

  const passwordRulesMessage =
    "Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";

  const navigate = useNavigate();

  useEffect(() => {
    props.setProgressHeight(99);
    document.getElementsByClassName("footer")[0].classList.remove("d-none");
    document.body.className = "steps-6";
  }, [props]);

  const debouncedEmailCallback = useCallback(
    debounce((value) => {
      if (value.match(emailPattern)) {
        document
          .getElementsByName("email")[0]
          .classList.remove("validation-error");
        props.setData({
          ...props.data,
          userEmail: value,
        });
      } else {
        document
          .getElementsByName("email")[0]
          .classList.add("validation-error");
        props.setData({
          ...props.data,
          userEmail: null,
        });
      }
    }, 50),
    [props.data]
  );

  const debouncedPasswordCallback = useCallback(
    debounce((value) => {
      if (value.match(passwordPattern)) {
        setPassword(value);
        setError(null);
        document
          .getElementsByName("password")[0]
          .classList.remove("validation-error");
        if (value == confirmPassword) {
          props.setData({
            ...props.data,
            userPassword: value,
          });
          document
            .getElementsByName("confirm_password")[0]
            .classList.remove("validation-error");
        } else {
          if (confirmPassword != null)
            document
              .getElementsByName("confirm_password")[0]
              .classList.add("validation-error");
          props.setData({
            ...props.data,
            userPassword: null,
          });
        }
      } else {
        props.setData({
          ...props.data,
          userPassword: null,
        });
        setPassword(null);
        setError(
          "Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
        );
        document
          .getElementsByName("password")[0]
          .classList.add("validation-error");
      }
    }, 50),
    [props.data, confirmPassword]
  );

  const onClickSubmit = () => {
    if (
      props.data == null ||
      props.data.userEmail == null ||
      props.data.userPassword == null ||
      props.data.acceptTerms == null
    )
      return;
    alert(JSON.stringify(props.data));
  };

  const goToPreviousStep = () => {
    props.setData({
      ...props.data,
      userPassword: null,
      acceptTerms: null,
    });
    document.getElementsByClassName("footer")[0].classList.add("d-none");
    props.setCurrentStep(5);
    props.setLogoColor("black");
  };

  const handleRegister = () => {
    // axios.post('https://papipetsbackend.sanctifysoft.com/api/auth/register',{
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         dog_description_id:  props.data.dog_description_id,
    //         name:props.data.name,
    //         email:props.data.userEmail,
    //         password:props.data.userPassword
    //       }),
    // }).then(res=>{
    //     console.log(res.data)
    // }).then(err=>{
    //     console.log(err)

    // })
console.log(props.data)
    if(!props.data.name || !props.data.acceptTerms  || !props.data.userEmail || !props.data.userPassword){
      setFieldError("S'il vous plaît, remplissez tous les champs correctement")
      // console.log('dekhi')
    }
    else{
      setFieldError(null)

      axios
      .post("https://papipetsbackend.sanctifysoft.com/api/auth/register", {
        dog_description_id: props.data.dog_description_id,
        name: props.data.name,
        email: props.data.userEmail,
        password: props.data.userPassword,
      })
      .then(function (response) {
        // console.log(response);
        if (response.data.status) {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("name", props.data.name);
          // localStorage.setItem("props",props)
          navigate("/");
          toast.success("Sign Up Successfully");
        } else {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  
  };

  // console.log(props.data);
  return (
    <div className="row justify-content-center animated">
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9 col-10">
        <p className="text-dark text-center mx-2">
          Enfin, dernière petite question...
        </p>
        <p className="h4 text-dark text-center font-weight-bold font-bold font-italic mx-2 mb-0">
          Quel est votre email ?
        </p>
        <div className="row justify-content-center">
          <div className="col-12 px-0 my-4">
            <input
              className="w-100"
              type="text"
              name="name"
              placeholder="Name"
              value={
                props.data != null && props.data.name != null
                  ? props.data.name
                  : name
              }
              onChange={(e) => {
                setName(e.target.value);
                props.setData({ ...props.data, name: e.target.value });
              }}
            />
          </div>
          <div className="col-12 px-0 my-4">
            <input
              className="w-100"
              type="email"
              name="email"
              placeholder="E-mail"
              value={
                props.data != null && props.data.userEmail != null
                  ? props.data.userEmail
                  : email
              }
              onChange={(e) => {
                setEmail(e.target.value);
                debouncedEmailCallback(e.target.value);
              }}
            />
          </div>
          <div className="col-12 px-0 mb-4">
            <input
              className="w-100"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                debouncedPasswordCallback(e.target.value);
              }}
              // setShowPasswordRules(true);

              // onBlur={() => setShowPasswordRules(false)}
            />
            {error && (
              <div className="d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ width: "30px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <p
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                >
                  {error}
                </p>
              </div>
            )}
          </div>
          <div className="col-12 px-0 mb-4">
            <input
              className="w-100"
              type="password"
              name="confirm_password"
              placeholder="Confirmer"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (e.target.value === password) {
                  document
                    .getElementsByName("confirm_password")[0]
                    .classList.remove("validation-error");
                  props.setData({
                    ...props.data,
                    userPassword: password,
                  });
                } else {
                  document
                    .getElementsByName("confirm_password")[0]
                    .classList.add("validation-error");
                  props.setData({
                    ...props.data,
                    userPassword: null,
                  });
                }
              }}
            />
          </div>
          <div className="col-12 px-0 my-4">
            <input
              className="w-100"
              type="text"
              name="dog_description_id"
              placeholder="dog id"
              value={
                props.data != null && props.data.dog_description_id != null
                  ? props.data.dog_description_id
                  : dogDescriptionId
              }
              readOnly
              onChange={(e) => {
                setDogDescriptionId(e.target.value);
                props.setData({
                  ...props.data,
                  dog_description_id: e.target.value,
                });
              }}
            />
          </div>
          {
          fieldError && <p className="text-red-700 text-xl">{fieldError}</p>
        }
          <div className="col-12 px-0 mb-4">
            <p className="h6 text-gray-400 font-weight-light text-center !text-sm">
              Afin que nous puissions vous partager les besoins caloriques
              quotidiens, les prix et le programme spécifique.
            </p>
          </div>
          <div className="col-12 px-0">
            <div className="form-check">
            <input
            style={{
              
    position:"relative",
    display:"inline-block",
    width: "15px",
    height: "15px"

            }}
                className=" bg-red-400"
                type="checkbox"
                id="accept-conditions"
                name="accept-conditions"
                maxLength={20}
                onChange={(e) => {
                  props.setData({
                    ...props.data,
                    acceptTerms: e.target.checked ? true : null,
                  });
                }}
              />
              <label style={{display:"initial"}}
                className="form-check-label h5 text-center !text-[15px]"
                htmlFor="accept-conditions"
              >
                J'accepte de recevoir des conseils personnalisés, des photos de
                chiens et chats super mignons, et occasionnellement des offres
                promotionnelles.
              </label>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center !mb-10">
          <div className="col-12 mt-5">
            <button
              type="button"
              className="previous action-button-previous !bg-white"
              onClick={goToPreviousStep}
            >
              &#8249;
            </button>
            <button
              type="button"
              className="submit-btn   !bg-white hover:!text-white hover:!bg-red-900"
              style={{
                fontWeight:"300"
              }}
              // disabled={
              //   props.data == null ||
              //   props.data.userEmail == null ||
              //   props.data.userPassword == null  ||
              //   props.data.acceptTerms==null
              // }
              onClick={handleRegister}
            >
              Découvrir son programme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
