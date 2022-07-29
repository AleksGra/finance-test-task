import React, {useEffect} from "react";
import PreLoader from "../components/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {setDataRedux} from "../redux/reducers/tickersReducer";
import styles from "../styles/Preloader.module.css";
import TickersList from "./TickersList";

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setDataRedux());
    }, [dispatch]);
    const {isLoading, isError} = useSelector((state) => state.tickers);

    if (isLoading) {
        return <PreLoader/>;
    }

    if (isError) {
        return <h2 className={styles.container}> 'Can't fetch the data' </h2>;
    }

    return <TickersList/>;
};

export default MainPage;
