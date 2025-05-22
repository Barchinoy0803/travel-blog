import React from 'react'
import { ITravelBlog } from '../../types'
import { FaLocationDot } from "react-icons/fa6";

interface IBlogCardProps {
    data: ITravelBlog
}

const BlogCard = ({ data }: IBlogCardProps) => {
    return (
        <div className='flex w-full border border-slate-800 p-6 gap-3 rounded-[5px]'>
            <img className='w-[150px] h-[150px] rounded-[5px]' src={data.image} alt="" />
            <div>
                <div className='flex items-center gap-2 text-[26px] text-slate-800 '>
                    <FaLocationDot />
                    <p>{data.location}</p>
                </div>
                <p className='text-[18px]'>{data.description}</p>
            </div>
        </div>
    )
}

export default React.memo(BlogCard)