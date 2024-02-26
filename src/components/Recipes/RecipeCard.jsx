import PropTypes from "prop-types";
import Modal from "../UI/Modal/Modal";
import "./Recipe.css";

function RecipeCard(props) {
  const {
    recipeImage,
    recipeTitle,
    recipeDesc,
    recipeDuration,
    recipeMaterials,
    recipeDetail,
  } = props;

  return (
    <div className="recipe-item">
      <div className="recipe-image">
        <img src={recipeImage} />
      </div>
      <div className="recipe-info">
        <div className="recipe-title">{recipeTitle}</div>
        <div className="recipe-desc">{recipeDesc}</div>
        <div className="recipe-duration">Pişirme Süresi: {recipeDuration}</div>
        <Modal
          recipeImage={recipeImage}
          recipeTitle={recipeTitle}
          recipeDuration={recipeDuration}
          recipeMaterials={recipeMaterials}
          recipeDetail={recipeDetail}
        >
          Tarif Detayları
        </Modal>
      </div>
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeImage: PropTypes.string,
  recipeTitle: PropTypes.string,
  recipeDesc: PropTypes.string,
  recipeDuration: PropTypes.string,
  recipeMaterials: PropTypes.array,
  recipeDetail: PropTypes.string,
};
