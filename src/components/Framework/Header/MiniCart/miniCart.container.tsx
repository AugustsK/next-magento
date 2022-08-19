import React from "react";
import MiniCart from "./miniCart";
import { createClientOnlyComponent } from "@/app/utils";

const MiniCartWrapper: React.FC<any> = () => {
    const WrappedMiniCart = createClientOnlyComponent(MiniCart);

    return (
        <WrappedMiniCart />
    )
}

export default MiniCartWrapper;