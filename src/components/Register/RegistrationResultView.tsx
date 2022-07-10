import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface RegistrationResultLocation {
  success: boolean;
  message: string;
}

const RegistrationResultView: FC = () => {
  const location = useLocation();
  const state = location.state as RegistrationResultLocation;

  return (
    <div className="container">
      <h2>
        {state.success ? '✅ ' : '🆘 '} {state.message}
      </h2>
    </div>
  );
};

export default RegistrationResultView;
