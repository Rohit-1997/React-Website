import * as React from 'react';
import CardList from "./card-list"
import {Product} from "../Modules/Product"
import * as axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardDetails from './card-details';
import Home from './Home-Page';


function App() {
    let [products, setProducts] = React.useState(new Array<Product>());

    // The useeffect hook to fetch data
    React.useEffect(() => {
        // iife to fetch the data
        (async function () {
            console.log("In products async");
            let products_arr: Array<Product> = [];
            await axios.default.get("http://localhost:5000/").then(
                function(response)
                {
                    let response_data= response['data']
                    response_data.data.map((obj: any) => {
                    let product = new Product(obj["Id"], obj["img"], obj["Url"], obj["Title"], obj["Description"], obj["Ratings"]);
                    products_arr.push(product);
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
        }())
    }, [])

    return (
        <div className="container-fluid d-flex justify-content-center main-contianer">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component = {Home} />
                    <Route path="/products" exact render = {(routeProps) => (<CardList {...routeProps} data={products} />)} />
                    <Route path="/:id" component = {CardDetails} />
                </Switch>
            </ BrowserRouter>
        </div>
    );
}

export default App;

