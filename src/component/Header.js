import React from 'react'

function Header(props) {
   
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4JD9wEDKLhEeurqabvGEdh1UdjAURgjsJg&usqp=CAU" />
            </div>
            <h2>Home component</h2>
            
        </div>
    )

}

export default Header