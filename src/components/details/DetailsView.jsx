import shortid from "shortid";
import OrderStatus from "../../utils/OrderStatus";

const DetailsView = ({detail}) => {
    return (
        <tr key={shortid.generate()}>
            <td>
                {new Date(detail.start).toLocaleString()}
                 -
                {new Date(detail.end).toLocaleString()}
            </td>
            <td>{OrderStatus.getStatusValue(detail.status)}</td>
            <td>{detail.price}</td>
        </tr>
    );
}

export default DetailsView;