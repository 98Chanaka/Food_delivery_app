import { createContext } from "react";
import PropTypes from "prop-types";  // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

// Add PropTypes validation for children
StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Validate that children is a node and is required
};

export default StoreContextProvider;
