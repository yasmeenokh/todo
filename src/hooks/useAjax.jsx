import axios from 'axios';
import { useState } from 'react';

const useAjax = (url) => {
  // const [list, setList] = useState([]);

  const restApi = async (method, url, item) => {
    const result = await axios({
      method: method,
      url: url,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: item,
    });
    return result.data;
  };
  const getHandler = async () => {
    return restApi('get', url);
    // const fetchData = async () => {
    //   let data = await restApi('get', url);
    //   setList(data.results);
    };
    // fetchData();
  
  const postHandler = async (item) => {
    restApi('post', url, item);
  };
  const putHandler = async (item) => {
    item.complete = !item.complete;
    let newUrl = `${url}/${item._id}`;
    restApi('put', newUrl, item);
  };
  const deleteHandler = async (item) => {
    let newUrl = `${url}/${item._id}`;
    restApi('delete', newUrl, item);
  };

  return [postHandler, deleteHandler, putHandler, getHandler];
};

export default useAjax;