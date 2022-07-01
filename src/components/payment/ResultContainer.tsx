import { FC, useEffect } from 'react';
import { fetchBalance, useBalanceDispatch } from '../../slices/BalanceSlice';

interface ResultContainerProps {
    success: boolean;
    message: string;
}

const ResultContainer: FC<ResultContainerProps> = ({ success, message }) => {
    const dispatch = useBalanceDispatch();

    useEffect(() => {
        dispatch(fetchBalance());
    });

    return (
        <div
            className={`container alert d-flex align-items-center ${
                success ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
        >
            <div>{message}</div>
        </div>
    );
};

export default ResultContainer;
