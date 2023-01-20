import propTypes from "prop-types";

const Title = ({ title, styleTitle }) => {
  return <h2 className={styleTitle}>{title}</h2>;
};

Title.propTypes = {
  // assim o title só vai aceitar string pq foi tipado. isso não é typescript
  title: propTypes.string.isRequired,
};

Title.defaultProps = {
  styleTitle: "style-title",
};

export default Title;
