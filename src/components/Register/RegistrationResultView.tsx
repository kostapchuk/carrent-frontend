import {useLocation} from 'react-router-dom';
import {FC} from "react";
import React from 'react';

interface RegistrationResultLocation {
    success: boolean,
    message: string,
}

const RegistrationResultView: FC = () => {

    const location = useLocation();
    const state = location.state as RegistrationResultLocation;

    return (
        <h2>{state.success ? "✅ " : "🆘 "} {state.message}</h2>
    );

}

export default RegistrationResultView;