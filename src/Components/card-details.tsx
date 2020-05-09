import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as axios from 'axios';
import { Product } from '../Modules/Product';



interface CardDetailsProps extends RouteComponentProps<{ id: string }> {
}


function CardDetails(props: CardDetailsProps) {
    let id = props.match.params.id;
    // The states
    let [product, setProduct] = React.useState<Product>(new Product("", "", "", "", "", []));
    
    // The effect hook to fetch the data
    React.useEffect(() => {
        // iife
        (async function() {
            await axios.default.get(`http://localhost:5000/product/${id}`).then(
                function(response)
                {
                    let response_data = response['data'].data
                    console.log("The resp: ",response_data);
                    let recv_product: Product = new Product(response_data["Id"], response_data["img"], response_data["Url"], response_data["Title"], response_data["Description"], response_data["Ratings"]);
                    console.log(recv_product);
                    setProduct(recv_product);
                }).catch(
                    (error) => {
                        console.log("Some error in getProduct");
                    }
                )
        }())
    }, [id])

    
    return (
        <div className = "container mt-5 details-container">
            <div className="row product-detail-row">
                {/* The column for the image */}
                <div className="col-md-6">
                    <figure className="figure">
                        <img src={product.image} className="figure-img img-fluid rounded" alt="Product"/>
                        <figcaption className="figure-caption" style={{ fontWeight: "bolder" }}>{product.title}</figcaption>
                    </figure>
                </div>

                {/* The column for the description */}
                <div className="col-md-6 item-details-col">
                <div className="container">
                        <h3>Item Ratings</h3>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p id="ratings-info">4,112 ratings & 200 reviews</p>
                        </div>
                        
                        <div className="Price-tag-container">
                            <h3>&#x20b9; 9,500 </h3>
                        </div>

                        <div className="additional-details-container">
                            <h5>{product.description}</h5>
                        </div>

                        <div className="product-buy-options-container">
                            <button type="button" className="btn btn-success btn-buynow">
                                <i className="fa fa-money" aria-hidden="true"></i> BUY NOW
                            </button>
                            <button type="button" className="btn btn-warning btn-addtocart">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;