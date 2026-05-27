
import axios from "axios";

import { useEffect, useState } from "react"

import { RecipiesList } from "./recipies-list";





export function FoodDeliveryIndex(){



    

    const [cuisines] = useState(['all', 'Asian', 'Italian', 'American',  'Pakistani', 'Mexican', 'Mediterranean']);

    const [selectedCuisine, setSelectedCuisine] = useState('all');



    function handleCuisineChange(e){

        setSelectedCuisine(e.target.value);

    }



    return(

        <div className="container-fluid">

            <header className="d-flex bg-light justify-content-between fs-4 fw-bold p-3">

                <span className="bi bi-fork-knife"> Food Delivery </span>

                <div>

                    <div className="input-group">

                        <input type="text" className="form-control" placeholder="Search food product" />

                        <button className="btn btn-warning bi bi-search"></button>

                    </div>

                </div>

                <span className="bi bi-cart4"></span>

            </header>

            <section className="row">

                <nav className="col-2">

                    <div className="mt-4">

                        <label className="form-label">Cuisine</label>

                        <div>

                            <select onChange={handleCuisineChange} className="form-select">

                                {

                                    cuisines.map(item=><option key={item} value={item}> {item.toUpperCase()} </option>)

                                }

                            </select>

                        </div>

                    </div>

                </nav>

                <main className="col-10">

                    <RecipiesList cuisine={selectedCuisine} />

                </main>

            </section>

        </div>

    )

}

