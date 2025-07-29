import { useContext,useState,useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(()=>{
        const currentDiaryItem = data.find(
            (item)=>String(item.id) === String(id)
        );
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", {replace: true});
        }
 
        setCurDiaryItem(currentDiaryItem);
    },[id])   //params.id나 data가 바뀌었을때 현재 수정하려는 일기 item을 가져와서 setCurDiaryItem이라는 함수를 통해서 curDiaryItem 이 state에 보관하게 됨.

    return curDiaryItem;
}

export default useDiary;