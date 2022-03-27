import {useLocation} from 'react-router-dom';

const RegistrationResultView = () => {

    const location = useLocation()

    return (
        <h2>{location.state.success ? "✅ " : "🆘 "} {location.state.message}</h2>
    );

}

export default RegistrationResultView;