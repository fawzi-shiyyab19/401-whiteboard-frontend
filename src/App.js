import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import AddComment from './components/AddComment';
import AddPost from './components/AddPost';
import ShowData from './components/ShowData';

function App() {

  const [data ,setData] = useState()

 const getData =async ()=>{

  let tempData = await axios.get("https://whitebord-backend.herokuapp.com/post/")

  setData(tempData.data)

 }


  useEffect(()=>{
      getData()
  })

  return (
    <div className="App">

      <AddPost getDataFun={getData}/>
      <AddComment getDataFun={getData}/>
      <ShowData data={data}/>

    </div>
  );
}

export default App;