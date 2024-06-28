import PropTypes from "prop-types";

const ImageCard = ({ place }) => {
  const { name, about, img, capital } = place;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img[0]} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{capital}</div>
          </h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  place: PropTypes.object,
};
