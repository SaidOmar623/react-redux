import React, { useState, useEffect } from 'react'
import Product from './product'
import axios from "axios"

const ShoppingCart = ()=>{
    // const [state, setState] = useState({
    //     title: "Our Application",
    //     products: [{
	// 		id: 2,
	// 		name: "Fries",
	// 		count: 3
	// 	}]
    // })

    const[title, setTitle]= useState("Our Application Hooks");
    const[products, setProducts] = useState([]);

    // const componentDidMount = async()=>{
    //     const {data} = await axios.get('http://localhost:3001/products');
    //     this.setState({products: data})
    // }

    useEffect(()=>{
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const handleChange = (product)=>{
        const newproducts = [...products];
        const index = newproducts.indexOf(product);
        newproducts[index] = {...newproducts[index]};
        newproducts[index].count +=1;
        setProducts(newproducts);
    }

    const changeTitle = ()=>{
        setTitle('Title Changed !!!!!!!!!!!!!!')
    }

    return ( 
        <React.Fragment>
            <h1>{title} 
                <button 
                    onClick={changeTitle}
                    className="btn btn-secondary btn-sm ml-auto">Change Title
                </button>
            </h1>
            <div className="row">
                {products.map(product=>(
                    <Product 
                        key={product.id} 
                        product={product} 
                        onChange={handleChange} 
                    />
                ))}
            </div>
        </React.Fragment>
    );
}
 
export default ShoppingCart;