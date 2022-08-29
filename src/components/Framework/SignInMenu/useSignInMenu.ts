import React, { useCallback } from 'react';

export const useSignInMenu = () => {
    const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(event => {
        event.preventDefault();
        console.log(event);
    }, []);

    return {
        handleSubmit
    };
};
