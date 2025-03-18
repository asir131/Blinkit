
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';
import SummaryApi from './common/SummaryApi';
import Axios from './utils/Axios';
import { setAllCategory, setAllSubCategory,setLoadingCategory } from './store/productSlice';
function App() {
  const dispatch = useDispatch()

  const fetchUser = async() => {
    const userData = await fetchUserDetails()
    
    dispatch(setUserDetails(userData.data))
    
  }
  
  const fetchCategory = async() => {
        try {
          dispatch(setLoadingCategory(true))
            const response = await Axios({
                ...SummaryApi.getCategory
            })
            const {data : responseData} = response

            if(responseData.success){
                // setCategoryData(responseData.data)
                dispatch(setAllCategory(responseData.data))
            }
            
        } catch (error) {
            console.log(error);
            
        }finally {
          dispatch(setLoadingCategory(false))
        }
    }

    const fetchSubCategory = async()=>{
      try {
          const response = await Axios({
              ...SummaryApi.getSubCategory
          })
          const { data : responseData } = response
  
          if(responseData.success){
             dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
          }
      } catch (error) {
          
      }finally{
      }
    }

   useEffect(() => {
    fetchUser()
    fetchCategory()
    fetchSubCategory()
   },[])

  return (
    <>
    <Header/>
    <main className='min-h-[78vh]'>
      <Outlet/>
    </main>
    <Footer/>
    <Toaster />
    </>
  )
}

export default App
