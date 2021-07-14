import React from 'react'

function Home() 
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4JD9wEDKLhEeurqabvGEdh1UdjAURgjsJg&usqp=CAU" />
            </div>
            <h2>Home component</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncqZg0pGLFtB-1id6qCYgRW0Smd0Glf0uaw&usqp=CAU" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    // onClick={
                    //     // ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    //     }
                    >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )

}

export default Home