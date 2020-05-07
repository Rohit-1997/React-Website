import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as axios from 'axios';
import Card from './card';
import { Product } from '../Modules/Product';



interface CardDetailsProps extends RouteComponentProps<{ id: string }> {
}

function CardDetails(props: CardDetailsProps) {
    let id = props.match.params.id;
    // The state
    let [product, setProduct] = React.useState<Product>(new Product("", "", "", "", "", []));


    async function getProduct() {
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
    }

    React.useEffect(() => {
        if (product.id === "") {
            getProduct();
        }
    })

    
    return (
        <div>
            <Card id={product.id} image={product.image} title={product.title} description={product.description}/>
        </div>
    );
}

export default CardDetails;