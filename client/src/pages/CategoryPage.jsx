import React, { useEffect, useState } from 'react'
import UploadCategoryModel from '../components/UploadCategoryModel'
import Loading from '../components/Loading'
import NoData from '../components/NoData'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'

const CategoryPage = () => {
    const [openUploadCategory,setOpenUploadCategory]=useState(false)
    const [loading,setLoading] = useState(false)
    const [categoryData,setCategoryData] = useState([])
    const fetchCategory = async() => {
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getCategory
            })
            const {data : responseData} = response

            if(responseData.success){
                setCategoryData(responseData.data)
            }
            
        } catch (error) {
            
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategory()
    },[])
  return (
    <section>
        <div className='p-2  bg-white shadow-2xl flex items-center justify-between'>
            <h2 className='font-bold'>Category</h2>
            <button onClick={()=>setOpenUploadCategory(true)} className='text-sm border border-amber-400 hover:bg-amber-400 hover:text-white px-2 rounded py-1'>Add Category</button>
        </div>
        {
            !categoryData[0] && !loading && (
                <NoData/>
            )
        }
        <div className='p-4 flex gap-2'>
        {
            categoryData.map((category,index)=>{
                return(
                    <div className='w-40 h-56  bg-[#edf4ff] rounded shadow-2xl'>
                        <img src={category.image} alt={category.name}
                        className='w-52' />
                    </div>
                )

            })
        }
        </div>

        {
            loading && (
                <Loading/>
            )
        }

        {
            openUploadCategory && (
                <UploadCategoryModel fetchData={fetchCategory} close={()=>setOpenUploadCategory(false)}/>
            )
        }
    </section>
  )
}

export default CategoryPage