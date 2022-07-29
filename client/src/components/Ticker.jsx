import {useDispatch} from "react-redux";
import styles from "../styles/TickersList.module.css";
import {actions} from "../redux/reducers/tickersReducer";
import React from "react";

const Ticker = ({item, index, watchingListRender}) => {
    const companiesName = {
        AAPL: "Apple",
        AMZN: "Amazon",
        GOOGL: "Google",
        FB: "Meta",
        MSFT: "Microsoft",
        TSLA: "Tesla",
    };
    const changePrice = (Number(item.price) - Number(item.change)).toFixed(2);
    const dispatch = useDispatch();

    return (
        <section className={styles.ticker} key={index}>
            <div className={styles.item}>
                {!watchingListRender ? (
                    <button className={styles.btn} onClick={() => dispatch(actions.addTickers(item))}>ADD TO
                        FAVORITE</button>
                ) : (
                    <button className={styles.btn} onClick={() => dispatch(actions.deleteTickers(item))}>
                        DELETE
                    </button>
                )}
                <div style={{color: "#EB431D"}}>{companiesName[item.ticker]}</div>
                <div>{item.ticker}</div>

                <div>{`${item.dividend} ` + "%"}</div>
                <div>{item.yield}</div>
                <div>price: {item.price}</div>
                {changePrice > 0 ? (
                    <span style={{color: "#0CF25D"}}>{changePrice} $ 🡅</span>
                ) : (
                    <span style={{color: "#EB431D"}}>{changePrice} $ 🡇</span>
                )}

            </div>
        </section>
    );
};
export default Ticker