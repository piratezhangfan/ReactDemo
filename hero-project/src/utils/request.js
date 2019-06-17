import fetch from 'dva/fetch';

export default function request(url, options) {
    return fetch(url, options).then(response => {
        const resData = response.json();
        // const resData = response.json();
        // console.log(resData);
        return resData;
    }).catch(e=>{
        console.log(e)
    });
}