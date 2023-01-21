import {useLocation} from 'react-router-dom';
import React, {FC} from "react";

interface RegistrationResultLocation {
    success: boolean,
    message: string,
}

const RegistrationResultView: FC = () => {

    const location = useLocation();
    const state = location.state as RegistrationResultLocation;

    return (
        <div className="container">
            <h2>{state.success ? "✅ " : "🆘 "} {state.message}</h2>
        </div>
    );
}

export default RegistrationResultView;
