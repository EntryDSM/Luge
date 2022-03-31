import { useSelector, useDispatch } from "react-redux";
import {
  decrease,
  increase,
  setnumber,
} from "../../data/modules/redux/action/test";
import { diff } from "../../data/modules/redux/reducer/test/interface/test";
import { RootState } from "../../data/modules/redux/store";

function Counter() {
  const { value } = useSelector((state: RootState) => state.CountReducer);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (payload: diff) => {
    dispatch(setnumber(payload));
  };
  return (
    <div>
      {value}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
