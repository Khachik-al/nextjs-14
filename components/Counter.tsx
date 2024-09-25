'use client';

import {decrement, increment} from "@/redux/features/CounterSlice";
import {RootState} from "@/redux/store";
import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h2>Redux counter</h2>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {' '}<span> {countState} </span>{' '}
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
}
