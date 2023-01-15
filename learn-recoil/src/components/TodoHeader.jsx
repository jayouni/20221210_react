import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { countState, todosState, undoneCountState } from "../state/todos";
import { getDoneCount, getPercentage, getUndoneCount, getUndoneCount02 } from "../state/todos_redux";

function TodoHeader() {

    //const count = useRecoilValue(countState);
    //const undoneCount = useRecoilValue(undoneCountState);

    const count = useSelector(getDoneCount);
    //const undoneCount = useSelector(getUndoneCount);
    const undoneCount = useSelector(getUndoneCount02);

    const percentage = useSelector(getPercentage);

    console.log(percentage);
  return (
    <div>
        <p>2023년 01월 14일</p>
        <p> 할일 :  {undoneCount} / {count} ({percentage})%</p>

    </div>
  );
}

export default TodoHeader;