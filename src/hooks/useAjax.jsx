import axios from 'axios';
import { useState } from 'react';

const useAjax = (url) => {
  const [list, setList] = useState([]);

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
  const getHandler = () => {
    const fetchData = async () => {
      let data = await restApi('get', url);
      setList(data.results);
    };
    fetchData();
  };
  const postHandler = (item) => {
    restApi('post', url, item);
  };
  const putHandler = (item) => {
    item.complete = !item.complete;
    let extendedUrl = `${url}/${item._id}`;
    restApi('put', extendedUrl, item);
  };

  const deleteHandler = (item) => {
    let extendedUrl = `${url}/${item._id}`;
    restApi('delete', extendedUrl, item);
  };

  return [list, postHandler, deleteHandler, putHandler, getHandler];
};

export default useAjax;