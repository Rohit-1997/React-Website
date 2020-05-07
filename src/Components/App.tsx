import * as React from 'react';
import * as ReactDOM from "react-dom";
import CardList from "./card-list"
import {Product} from "../Modules/Product"
import * as axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CardDetails from './card-details';


function App() {
    let [products, setProducts] = React.useState(new Array<Product>());
    async function getProducts() {
    let products_arr: Array<Product> = [];
    await axios.default.get("http://localhost:5000/").then(
        function(response)
        {
        let response_data= response['data']
        response_data.data.map((obj: any) => {
        let product = new Product(obj["Id"], obj["img"], obj["Url"], obj["Title"], obj["Description"], obj["Ratings"]);
        products_arr.push(product);
        // console.log(product);
        })
    
    setProducts(products_arr);
    }
    ).catch(
        function(error){
        console.log("Receved some error")
        console.log(error);
        return null;
        }
    )
    }
    React.useEffect(() => {
        if(products.length == 0){
            getProducts();
        }
    })

    return (
                <div className="container-fluid d-flex justify-content-center">
                <BrowserRouter>
                  <Switch>
                    <Route path="/" exact render = {(routeProps) => (<CardList {...routeProps} data={products} />)} />
                    <Route path="/:id" component = {CardDetails} />
                  </Switch>
                </BrowserRouter>
                {/* <CardList data={products}/> */}
                </div>
    );
}

export default App;

