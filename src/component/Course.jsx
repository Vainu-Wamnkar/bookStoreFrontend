import React, {  useMemo} from 'react'
const Cards = React.lazy(() => import('./Cards'));
import { useNavigate } from 'react-router-dom';
import Simmer from './Simmer';


function Course({bookData}) {

  const paidBook=useMemo(()=>{
      return bookData.filter((book) => book.category !== "Free")
  },[bookData])
  
  const navigate=useNavigate()


  function handleBack(){
    navigate("/")
  }

  
  return (
    <>
    {
      (!bookData ||bookData.length===0)?
      <Simmer/>:
      <div className=' p-12'>
        <div className='flex flex-col gap-10 items-center my-8'>
          <h1 className='text-center text-4xl '>We are delighted to have you here!</h1>
          <p className='text-center text-xl'>Our premium courses are carefully curated to deliver in-depth knowledge and real-world skills. With expert instructors, structured modules, and lifetime access to content, these paid courses are an investment in your personal and professional growth. </p>
          <button className='bg-pink-500 px-6 py-2 text-white rounded-md items-center' onClick={handleBack}>Back</button>
        </div>
        <div className={`mt-8 gap-6 grid ${paidBook.length>0?"grid-cols-4":""}`}>
              {paidBook.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
        </div>
      </div>
    }
    </>
  )
}

export default Course