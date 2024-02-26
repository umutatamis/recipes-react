import { useState } from "react";
import Close from "/src/assets/Svg/close.svg";
import "./Modal.css";

function Modal(props) {
  const {
    children,
    recipeImage,
    recipeTitle,
    recipeDuration,
    recipeMaterials,
    recipeDetail,
  } = props;
  const [openRecipe, setOpenRecipe] = useState(false);
  const recipeShow = () => setOpenRecipe(true);
  const recipeClose = () => setOpenRecipe(false);
  return (
    <>
      <button onClick={recipeShow}>{children}</button>
      {openRecipe && (
        <div id="custom-modal-container" className="custom-modal-container">
          <div className="custom-modal-overlay" onClick={recipeClose}></div>
          <div className="custom-modal">
            <div className="modal-top">
              <div className="modal-top-left">
                <div className="recipe-detail-title">{recipeTitle}</div>
                <div className="recipe-detail-duration">
                  Pişirme Süresi: {recipeDuration}
                </div>
              </div>
              <div className="custom-modal-close" onClick={recipeClose}>
                <img src={Close} />
              </div>
            </div>
            <div className="custom-modal-content">
              <div className="recipe-detail">
                <div className="recipe-detail-top">
                  <div className="recipe-detail-image">
                    <img src={recipeImage} />
                  </div>
                </div>
                <div className="recipe-detail-bottom">
                  <div className="recipe-detail-materials">
                    <strong>Gerekli Malzemeler</strong>
                    <ul>
                      {recipeMaterials.map((materials, index) => (
                        <li key="index">{materials}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="recipe-detail-materials">
                    <strong>Yapılışı</strong>
                    {recipeDetail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
