import React, { useState, useEffect} from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import NoticeTable from './components/NoticeTableComponent'
import ClassTable from './components/ClassTableComponent'
import axios from 'axios';

const getNoticeInfos = axios.get('http://localhost:8081/api/getnotice?category=&keyword=')
  .then((Response)=>Response.data)
  .catch((Error)=>{console.log(Error)})



const getClassInfos = axios.get('http://localhost:8081/api/getclassinfos')
  .then((Response)=>Response.data)
  .catch((Error)=>{console.log(Error)})

function Loading(){
    return(
       <Loader
           type="Oval"
           color="#3d66ba"
           height={30}
           width={30}
           timeout={40000}
       />
    );
}

function App(){
  const [notice, setNotice] = useState(null);
  const [classes, setClasses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    getNoticeInfos.then(value=>{
      setNotice(value);
    })
  },[])

  useEffect(()=>{
      setIsLoading(true);
      getClassInfos.then(value=>{
        setClasses(value);
        setIsLoading(false);
      }).catch((Error) => {
        console.log(Error);
        setIsLoading(false);
      });
    },[])

  return (
    <div className="App">
        <p className="header">숭실대학교 수업 도우미</p>
        <div className="notice-section">
            <p className="Table-header">공지사항</p>
            <span className="category-wrapper">
                <label className="label">검색할 카테고리</label>
                <select name="category" className="form-select selectbox">
                    <option value="">전체</option>
                </select>
            </span>
            <span className="keyword-wrapper">
                <label className="label">검색할 키워드</label>
                <input type="text" />
            </span>
            <div className="col-md-12 demo-div heading-section">
                <NoticeTable data={notice} className="notice-table"/>
            </div>
        </div>

        <div className="class-section">
            <p className="Table-header">수업목록</p>
            <div className="col-md-12 demo-div heading-section">
                {isLoading? <Loading/> : <ClassTable data={classes} className="class-table"/>}
            </div>
        </div>
    </div>
  );
}

export default App;
