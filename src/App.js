import Main from './components/Main'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import base64 from 'base-64';
import { Route,Routes } from "react-router-dom";

import Log from './components/Log'
import JS from './components/JS';

function App() {

  const [data, setData] = useState([]);
  const [loggedin, setLoggedin] = useState(false);

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
      title: e.target.title.value,
      content: e.target.contnet.value,
    }
    let url = `${process.env.REACT_APP_SERVER}/post`;
    let axiosRequest = await axios.post(url, obj);
    let posts = axiosRequest.data;
    getData().then((resolve) => {
      setData(resolve);
    })

  }

  async function signup(e) {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmpassword.value) {
      alert("password is not matvh")
      return;
    }
    console.log('sign UP baby');
    let url = `${process.env.REACT_APP_SERVER}/signup`;
    const obj = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,

    }
    await axios.post(url, obj);
  }

  function signin(e) {
    e.preventDefault();
    console.log('inside sigin in');
    const obj = {
      userN: e.target.username.value,
      passW: e.target.password.value
    }
    const encodedData = base64.encode(`${obj.userN}:${obj.passW}`);
    const url = `${process.env.REACT_APP_SERVER}/signin`;
    axios.post(url, {}, { headers: { Authorization: `Basic ${encodedData}` } })
      .then(resolved => {
        console.log(resolved.data);
        setLoggedin(true)
      })
      .catch(reject => { console.log(reject) });
  };




  return (
    <>

      {/* {!loggedin && >}
      {loggedin && 
      <Main data={data} dfunc={deletePost} acfunc={addComment} apfunc={addPost} />} */}

      <Routes>
        {/* //Route One */}
        
        <Route exact path="/" element={
          (loggedin) ?
            <Main data={data} dfunc={deletePost} acfunc={addComment} apfunc={addPost} /> :
            <Log sifunc={signin} sufunc={signup} />
        }></Route>

          {/* /// Route 2 */}
        <Route exact path="/js" element={<JS /> }>
        </Route>


      </Routes>
    </>
  );
}

export default App;