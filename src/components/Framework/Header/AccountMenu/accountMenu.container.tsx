import React from "react";
import AccountMenu from "./accountMenu";
import { createClientOnlyComponent } from "@/app/utils";

const AccountMenuWrapper: React.FC<any> = () => {
    const WrappedAccountMenu = createClientOnlyComponent(AccountMenu);

    return (
        <WrappedAccountMenu />
    )
}

export default AccountMenuWrapper;