import React from "react";
import MenuComponent from "../../menu-component/menu-rename";

const FoodsPage = () => {

    return (
        <div className="container mt-5">
            <MenuComponent height={300 }  />
            <MenuComponent height={500 }  />
            <MenuComponent height={300 }  />
            <MenuComponent height={300 }  />
        </div>
    )
}

export default FoodsPage