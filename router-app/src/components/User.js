import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    // const { id } = useParams(); 

    // window.location 객체를 통해 URL 정보 접근
    const location = window.location;

    // window.location.pathname을 '/'로 분리한 배열에서 id 추출
    const pathParts = location.pathname.split('/');
    const id = pathParts[pathParts.length - 1]; // 마지막 부분이 id

    return <h1>User ID: {id}</h1>;
}

export default User