import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <div className="relative  border-orange-600 text-center shadow-lg rounded-2xl">
      <p className="absulate ml-10 bottom-0 text-7xl -z-10 opacity-10">{children}</p>
      <h1 className="text-6xl font-bold">{children}</h1>
    </div>
  );
};

export default Title;

Title.propTypes = {
  children: PropTypes.node,
};
