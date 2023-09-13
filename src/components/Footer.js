import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      {props.currentStep == 0 ? (
        <div id="dogs-steps-1" bis_skin_checked="1">
          <img
            src="./img/slider-1/shap-slider-1.svg"
            alt="chien"
            className="shap_right"
          />
          <img
            src="./img/slider-1/natural.svg"
            alt="shap"
            className="naturel_img"
          />
          <img src="./img/chien.png" alt="chien" className="chien-footer" />
          <img src="./img/plante.png" alt="chien" className="plante-footer" />
        </div>
      ) : props.currentStep == 1 ? (
        <div id="image_slider_1">
          <img
            src="./img/slider-2/chien_doct_slide-2.svg"
            alt="docteur"
            className="chien_doc"
          />
          <img
            src="./img/slider-2/right_line.svg"
            alt="shap"
            className="shap_right"
          />
          <img
            src="./img/slider-2/bilon_chien.svg"
            alt="bilon"
            className="bilon_chien"
          />
          <img
            src="./img/slider-2/table&ch.svg"
            alt="table"
            className="table_footer"
          />
        </div>
      ) : props.currentStep == 2 ? (
        <div id="image_slider_2" bis_skin_checked="1">
          <img src="./img/slider-3/dogs.svg" alt="Dogs" className="sidewalk" />
        </div>
      ) : props.currentStep == 5 ? (
        <div id="dogs-steps-5" bis_skin_checked="1">
          <img src="./img/dogs-steps6.png" alt="chien" className="chien_b" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Footer;
