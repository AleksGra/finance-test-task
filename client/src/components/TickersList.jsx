import React from "react";
import styles from "../styles/TickersList.module.css";
import {useSelector} from "react-redux";
import Ticker from "./Ticker";

const TickersList = () => {
    const {tickersList, watchingList} = useSelector((state) => state.tickers);

    const watchingListRender = watchingList.map((item) => {
        return tickersList.find(({ticker}) => ticker === item.ticker);
    });

    return (
        <section>
            <h2>MAIN TICKERS</h2>
            <div className={styles.container}>

                {tickersList.map((item, index) => (
                    <Ticker item={item} index={index}/>
                ))}
            </div>
            {watchingListRender.length > 0 && <h2>FAVORITE TICKERS</h2>}
            <div className={styles.container}>
                {!!watchingListRender &&
                    watchingListRender.map((item, index) => (
                        <Ticker
                            item={item}
                            index={index}
                            watchingListRender={watchingListRender}
                        />
                    ))}
            </div>
        </section>

    );
};

export default TickersList;


