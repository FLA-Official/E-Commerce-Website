import React, { createContext } from "react";
import PropTypes from 'prop-types';
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const contextValue = {all_product};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
