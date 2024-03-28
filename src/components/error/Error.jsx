import {ReactComponent as Refresh} from '../../assets/Refresh.svg';
import { useNavigate } from "react-router-dom";
import './style.css';

const Error = ({error}) => {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
      };

    return <div className="error-wrapper">
        <h3>Something went wrong. Please try again</h3>
        <p>{error ? error.data : null}</p>
        <div className="refresh-icon" onClick={refreshPage}>
            <Refresh />
        </div>
    </div>;
};

export default Error;