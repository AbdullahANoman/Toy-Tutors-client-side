import React from "react";

const ToysRow = ({toy}) => {
    const {_id,toyName,category,price,quantity} = toy;
    console.log(_id,toyName,category,price,quantity)
  return (
    <tr>
      <td className="text-center">{toy?.sellerName}</td>
      <td className="text-center">{toyName}</td>
      <td className="text-center">{category}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <button className="btn btn-primary">View Details</button>
      </td>
    </tr>
  );
};

export default ToysRow;