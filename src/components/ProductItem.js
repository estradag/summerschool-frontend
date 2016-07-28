import React, {PropTypes} from 'react';

const ProductItem = ( {handleClick, identifier, title, category, description, price, image, feature} ) => {
  const PrintFeatureItem =
    (feature)?
      <span className="feature-product">
        <img src={require("../images/featured_product.png")} alt={'feature '+title}/>
      </span> : "";
  return (
      <div key={identifier} className="col-md-3 item-grid simpleCart_shelfItem">
        <div className="mid-pop">
          {PrintFeatureItem}
          <div className="pro-img">
            <img src={require("../images/"+image)} className="img-responsive" alt={title}/>
          </div>
          <div className="mid-1">
            <div className="women">
              <div className="women-top">
                <span>{category}</span>
                <h6><a href="javascript:void(0)">{title}</a></h6>
              </div>
              <div className="img item_add">
                <a href="javascript:void(0)">
                  <img 
                    onClick={handleClick}
                    id={identifier}
                    src={require("../images/ca.png")}
                    alt="add to cart" />
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="mid-2">
              <p><em className="item_price">$ {price}</em></p>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

ProductItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  identifier: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  feature: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductItem;