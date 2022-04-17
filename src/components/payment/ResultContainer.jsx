const ResultContainer = ({success, message}) => {
    return (
        <div className={`container alert d-flex align-items-center ${success ? "alert-success" : "alert-danger"}`} role="alert">
            <div>
                {message}
            </div>
        </div>
    )
}

export default ResultContainer;