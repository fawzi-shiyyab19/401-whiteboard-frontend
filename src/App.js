

import Header from "./components/Header";
import Main from "./components/Main";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import base64 from "base-64";
import Log from "./components/Log";
import cookies from "react-cookies";

function App() {
  const [data, setData] = useState([]);
  const [loggedin, setLoggedin] = useState(false);
  const [comments , setComments] = useState([]);

  useEffect(() => {
    const token = cookies.load("token");
    if (token) setLoggedin(true);
    getData().then((resolve) => {
      console.log(resolve)
      setData(resolve);
    });
  }, []);

  async function getData() {
    const token = cookies.load("token");
    if (token) {
      let bearer = { headers: { Authorization: `Bearer ${token}` } };
      let url = `${process.env.REACT_APP_SERVER}/post`;
      const axiosRequest = await axios.get(url, bearer);
      const datax = axiosRequest.data;
      setData(datax)
      setLoggedin(true)
      return datax;
    }
  }

  async function deletePost(id) {
    const token = cookies.load("token");
    let bearer = { headers: { Authorization: `Bearer ${token}` } };
    let url = `${process.env.REACT_APP_SERVER}/post/${id}`;
    await axios.delete(url, bearer);
    getData().then((resolve) => {
      setData(resolve);
    });
  }

  async function addComment(postId, obj, userId) {
    let url = `${process.env.REACT_APP_SERVER}/comment/${postId}/${userId}`;
    if (obj.text === "") {
      alert(`add comment before submit`);
    } else {
      let AllcommentsWithUsers = await axios.post(url, obj);
      setComments(AllcommentsWithUsers);
      getData().then((resolve) => {
        setData(resolve);
      });
    }
  }

  async function addPost(e) {
    e.preventDefault();
    const token = cookies.load("token");
    let bearer = { headers: { Authorization: `rer ${token}` } };
    const obj = {
      title: e.target.title.value,
      content: e.target.contnet.value,
    };
    let url = `${process.env.REACT_APP_SERVER}/post`;
    let axiosRequest = await axios.post(url, obj, bearer);
    let posts = axiosRequest.data;
    getData().then((resolve) => {
      setData(resolve);
    });
  }

  async function signup(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/signup`;
    const obj = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await axios.post(url, obj);
  }

  function signin(e) {
    e.preventDefault();
    const obj = {
      userN: e.target.username.value,
      passW: e.target.password.value,
    };
    const encodedData = base64.encode(`${obj.userN}:${obj.passW}`);
    const url = `${process.env.REACT_APP_SERVER}/signin`;
    axios
      .post(url, {}, { headers: { Authorization: `Basic ${encodedData}` } })
      .then((resolved) => {
        cookies.save("token", resolved.data.token);
        cookies.save("name", resolved.data.userName);
        cookies.save("id", resolved.data.id);
        getData()
        // setLoggedin(true);
      })
      .catch((reject) => {
      });
  }

  function logout() {
    console.log("insidelogout");
    cookies.remove("token");
    cookies.remove("name");
    cookies.remove("id");
    setLoggedin(false);
  }

  return (
    <>
      <Header x={logout} loggedin={loggedin} />
      {!loggedin && <Log sifunc={signin} sufunc={signup} />}
      {loggedin && (
        <Main
          data={data}
          comments ={comments}
          dfunc={deletePost}
          acfunc={addComment}
          apfunc={addPost}
        />
      )}
    </>
  );
}

export default App;