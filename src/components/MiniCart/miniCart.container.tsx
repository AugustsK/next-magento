import React from "react";
import MiniCart from "./miniCart";
import clientOnly from "../../utils/clientOnly";

const MiniCartWrapper: React.FC<any> = () => {
    const WrappedMiniCart = clientOnly(MiniCart);

    return (
        <WrappedMiniCart />
    )
}

export default MiniCartWrapper;