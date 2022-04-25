import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchBalance} from "../../slices/BalanceSlice";

const ResultContainer = ({success, message}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBalance())
    })

    return (
        <div className={`container alert d-flex align-items-center ${success ? "alert-success" : "alert-danger"}`} role="alert">
            <div>
                {message}
            </div>
        </div>
    )
}

export default ResultContainer;