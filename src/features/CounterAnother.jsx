import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './mainSlice';
import { incrementAsync } from './mainSlice';
import { selectStatus } from './mainSlice';
import { selectPost } from '../store/selectors';
import styles from "./Counter.module.css";
// import "./Counter.module.css";

export const CounterNew = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectPost);
    const status = useSelector(selectStatus);
    const [incrementAmount, setIncrementAmount] = useState("2");
    // const [count, setRegion] = useState(0);
    // const handleCount = (value) => {
    //     setRegion(value);
    //     dispatch(decrement());

    // }
    // const count = useSelector(state => state.counter.value)

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => {
                        dispatch(decrement())
                    }}
                    >
                    -
                </button>
                <span aria-label="Count" className={styles.value}>
                    {count}
                </span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => {
                        dispatch(increment())
                    }}
                    >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                className={styles.textbox}
                aria-label="Set increment amount"
                value={incrementAmount}
                type="number"
                onChange={e => {
                    setIncrementAmount(e.target.value)
                }}
                />
                <button
                className={styles.button}
                onClick={() => {
                    dispatch(incrementByAmount(Number(incrementAmount)))
                }}
                >
                Add Amount
                </button>
            </div>
            <div className={styles.row}>
                <button
                    className={styles.asyncButton}
                    // disabled={status !== "idle"}
                    onClick={() => {
                        dispatch(incrementAsync(incrementAmount))
                    }}
                >
                Add Async
                </button>
            </div>
        </div>
    )
}