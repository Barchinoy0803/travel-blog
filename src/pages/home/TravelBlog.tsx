import React, { FormEvent, useState } from 'react'
import { useChange } from '../../hooks/useChange'
import { ITravelBlog } from '../../types'
import { usePost } from '../../hooks/usePost'
import BlogCard from '../../components/BlogCard/BlogCard'
import { useFetch } from '../../hooks/useFetch'

const initialState: ITravelBlog = {
  image: "",
  location: "",
  description: "",
  id: null
}

const TravelBlog = () => {
  const { formData, setFormData, handleChange } = useChange<ITravelBlog>(initialState)
  const [reload, setReload] = useState<boolean>(true)

  const { post } = usePost()

  const { data } = useFetch("/blog", reload)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newBlog = {
      ...formData,
      id: new Date().getTime()
    };

    await post("/blog", newBlog)
    setReload((p) => !p)

    setFormData(initialState)
  }

  return (
    <div className='container mx-auto flex flex-col my-7'>
      <h2 className='py-3.5 ml-[370px] text-[40px] text-slate-700'>Share your trip with others</h2>
      <form onSubmit={handleSubmit} action="" className='  flex flex-col gap-4 items-center'>
        <input onChange={handleChange} value={formData.image} name='image' className='border border-slate-700 w-[800px] p-4 rounded-[8px] outline-slate-950' type="text" placeholder='Image(url)' />
        <input onChange={handleChange} value={formData.location} name='location' className='border border-slate-700 w-[800px] p-4 rounded-[8px] outline-slate-950' type="text" placeholder='Location' />
        <input onChange={handleChange} value={formData.description} name='description' className='border border-slate-700 w-[800px] p-4 rounded-[8px] outline-slate-950' type="text" placeholder='Description' />
        <button className='border border-slate-700 w-[800px] p-4 rounded-[8px] outline-slate-950 text-[20px] text-white bg-slate-800 cursor-pointer'>Create</button>
      </form>
      <h2 className='mt-[60px] mb-[20px] text-[25px] text-slate-700'>Others shares</h2>
      <div className='container mx-auto items-center flex flex-col gap-5'>
        {
          data?.map((item) => (
            <BlogCard data={item} />
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(TravelBlog)