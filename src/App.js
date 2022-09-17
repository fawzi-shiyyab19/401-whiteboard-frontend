import Main from './components/Main'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((resolve) => {
      setData(resolve);
    });

  }, []);

  async function getData() {
    let url = `${process.env.REACT_APP_SERVER}/post`;
    const axiosRequest = await axios.get(url);
    const datax = axiosRequest.data;
    return datax;

  }

  async function deletePost(id) {
    let url = `${process.env.REACT_APP_SERVER}/post/${id}`;
    await axios.delete(url);
    getData().then((resolve) => {
      setData(resolve);
    });

  }

  async function addComment(id, obj) {
    let url = `${process.env.REACT_APP_SERVER}/comment/${id}`;
    if (obj.text === '') {
      alert(`add comment before submit`)
    } else {
      let comments = await axios.post(url, obj);
      getData().then((resolve) => {
        setData(resolve);
      })
    }

  }

  async function addPost(e) {
    e.preventDefault();
    const obj = {
      title:e.target.title.value,
      content:e.target.contnet.value,
    }
    let url = `${process.env.REACT_APP_SERVER}/post`;
    let axiosRequest = await axios.post(url, obj);
    let posts = axiosRequest.data;
    getData().then((resolve) => {
      setData(resolve);
    })

  }

  return (
    <>
      <Main data={data} dfunc={deletePost} acfunc={addComment} apfunc={addPost}/>
    </>
  );
}

export default App;