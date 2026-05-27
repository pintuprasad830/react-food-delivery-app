

import axios from "axios";

import { useEffect, useState } from "react"





export function RecipiesList(props){



    const [data, setData] = useState({recipes:[]});



    function LoadRecipies(){

        if(props.cuisine==='all'){

            axios.get('https://dummyjson.com/recipes')

            .then(response=>{

                setData(response.data);

            })

        } else {

            axios.get('https://dummyjson.com/recipes')

            .then(response=>{

                 setData({recipes:response.data.recipes.filter(item=>item.cuisine===props.cuisine)});

            })

        }

    }



    useEffect(()=>{

        LoadRecipies();

    },[props.cuisine])



    return(

        <div className="d-flex flex-wrap align-items-baseline overflow-auto" style={{height:'500px'}}>

           {

                        data.recipes.map(item=>

                            <div className="card m-2 p-2" style={{width:'200px'}} key={item.id}>

                                <img  className="card-img-top" src={item.image} height={120} />

                                <div className="card-header" style={{height:'90px'}}>

                                    <div>{item.name}</div>

                                    

                                </div>

                                <div className="card-body">

                                    <div className="fw-bold mt-2">

                                        [{item.cuisine}]

                                    </div>

                                </div>

                                <div className="card-footer">

                                   <button className="btn btn-warning w-100 bi bi-cart"> Add to Cart </button>

                                </div>

                            </div>

                        )

             }

        </div>

    )

}



 
