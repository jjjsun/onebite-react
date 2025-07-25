import './DiaryList.css'
import Button from "./Button";
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({data}) => {

    const nav = useNavigate();

    const [sortType, setsortType] = useState("latest");
    const onChangeSortType = (e) =>{
        setsortType(e.target.value);
    };

    const getSortedDate = () => {
        //Sorted는 원본배열도 반환하고,
        //toSoted는 원본배열은 그대로 두고 반환하기때문에 toSorted를 선택함.

        return data.toSorted((a,b)=>{
            if(sortType ==='oldest'){
                return Number(a.createdDate) - Number(b.createdDate);
            } else{
                return Number(b.createdDate) - Number(a.createdDate);
            }
        })
    };

    const sortedData = getSortedDate();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={()=>nav("./new")} text={"새 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default DiaryList;