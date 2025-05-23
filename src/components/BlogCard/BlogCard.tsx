import React from 'react'
import { ITravelBlog } from '../../types'
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useDelete } from '../../hooks/useDelete';

interface IBlogCardProps {
    data: ITravelBlog,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    setId: React.Dispatch<React.SetStateAction<null | number>>
}

const BlogCard = ({ data, setReload, setId }: IBlogCardProps) => {
    const { deleteData } = useDelete()

    const handleDelete = async (id: number | null) => {
        await deleteData(`/blog/${id}`)
        setReload((p) => !p)
    }

    return (
        <div className='flex w-full border border-slate-800 p-6 gap-3 rounded-[5px]'>
            <img className='w-[150px] h-[150px] rounded-[5px]' src={data.image} alt="" />
            <div className='flex flex-col w-full'>
                <div className='flex items-center gap-2 text-[26px] text-slate-800 '>
                    <FaLocationDot />
                    <p>{data.location}</p>
                </div>
                <p className='text-[18px]'>{data.description}</p>
                <div className='flex justify-end items-end flex-1 gap-3 text-[26px] w-full'>
                    <a href='#title'>
                        <MdEdit onClick={() => setId(data.id)} className='cursor-pointer' />
                    </a>
                    <RiDeleteBin4Fill onClick={() => handleDelete(data.id)} className='text-red-700 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default React.memo(BlogCard)