import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CardProduct() {

    const [product, setproduct] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setproduct(res.data)
    }

    return (
        <div>
            <h1>Hello this Product </h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        product && product.map((data, index) => {
                            // console.log(data)
                            const {image,title,category,price,description} = data
                            return (
                                <div className="col" key={data.id}>
                                    <div className="card">
                                        <img src={image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <h5 className="card-title">{category} </h5>
                                            <h5 className="card-title">{price} $</h5>
                                            <p className="card-text">{description.slice(0,70)}...</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default CardProduct
