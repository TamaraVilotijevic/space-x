import { useState, useEffect } from "react";
import api from '../../services/api.js';
import Company from "../company/Company.jsx";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";

const HomeView = () => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get('/company')
        .then((res) => {
            setData(res.data);
        }).catch((err) => {
            setError(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return <div className="home">
        <h1>Home</h1>
        {isLoading ? (<Loading />) : error ? (<Error />) : (<Company companyInfo={data} />)}
    </div>;
};

export default HomeView;