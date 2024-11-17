import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {filterData,apiUrl} from './Data';
import Spinner from './components/Spinner';

function App() {
  
  const[courses, setCourses] = useState("");
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);

  async function heda () {
    setLoading(true);
    try{
        let magi = await fetch(apiUrl);
        let output = await magi.json();
        console.log(output.data);
        setCourses(output.data);
    }
    catch(e){
      toast.error("somethig went wrong");
    }
    setLoading(false);
   }

  useEffect( () => {
      heda();
  },[]);

  return (
  <div className="min-h-screen flex flex-col bg-gray-900">
    
    <div>
    <Navbar></Navbar>
    </div>

    <div className="bg-gray-400">
      <div>

      <Filter 
      filterData={filterData} 
      category={category}
      setCategory={setCategory}
      ></Filter>
      
   
    </div>

    <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
      }
    
    </div>
    
    </div>
    
  </div>
  )
}

export default App
