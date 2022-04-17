import CarCard from "./CarCard";

const CarView = ({
                     car,
                     loading,
                     startRent,
                     startBook,
                     finishRide,
                     pauseRent
                 }) => {

    return (
        loading
            ?
            <p>⏰⏰⏰⏰⏰⏰</p>
            :
            <div className="col">
                <CarCard
                    car={car}
                    startRent={startRent}
                    startBook={startBook}
                    finishRide={finishRide}
                    pauseRent={pauseRent}
                />
            </div>
    )
}

export default CarView;