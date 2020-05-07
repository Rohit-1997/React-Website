import * as React from 'react';
import Card from "./card";
import { Product } from '../Modules/Product';

interface productProps {
    data: Array<Product>
}
function CardList(props: productProps) {

    return (
        <div className="cards-row">
        {props.data.map((product, index) => {
        console.log(product.title);
        return <Card key={index} id={product.id} image={product.image} title={product.title} description={product.description}/>
        })}
        </div>
    );
}

export default CardList;
