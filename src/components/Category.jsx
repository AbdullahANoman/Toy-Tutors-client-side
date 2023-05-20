import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ job }) => {
  console.log(job);
  const { photo, price, rating, toyName, _id } = job || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" className=" w-[200px]" />
      </figure>
      <div className="card-body">
        
        <div className="flex items-center justify-between">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p className="text-end text-2xl">${price}</p>
        </div>
        <p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar className="text-yellow-500"></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary btn-block mt-2" to={`/details/${_id}`}><button>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
