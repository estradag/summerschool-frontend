import React, {PropTypes} from 'react';

const OrderSummaryItem = ( {identifier, title, category, description, price, image} ) => {
  return (
		<tr key={identifier} className="cart-header">
			<td className="ring-in">
				<a href="single.html" className="at-in">
					<img src={require("../images/"+image)} className="img-responsive" alt={title} />
				</a>
				<div className="sed">
					<h5>
						<a href="javascript:void(0)">{title}</a>
					</h5>
					<p>{category}</p>
				</div>
				<div className="clearfix"> </div>
			</td>
			<td>$ {price}</td>
			<td>FREE SHIPPING</td>
			<td className="item_price">$ {price}</td>
		</tr>
  );
};

OrderSummaryItem.propTypes = {
  identifier: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default OrderSummaryItem;