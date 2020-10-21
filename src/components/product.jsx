import React from 'react'

const Product = (props) => {
    return ( 
        <div className="col-md-4">
            <div className="card mb-2 mt-2">
                <div className="pro-name d-flex justify-content-between mb-2">
                    <span>{props.product.name}</span>
                    <span className="badge badge-primary">{props.product.count}</span>
                </div>
                <button onClick={()=> props.onChange(props.product)} className="btn btn-primary btn-sm btn-block">+</button>
            </div>
        </div>
     );
}
 
export default Product;