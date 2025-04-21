import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        <div className="md:hidden xl:block xl:w-1/3 ">
            <Image src={'postImg.jpeg'} className='rounded-2xl object-cover 'w='735' />
        </div>
        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to={'/test'} className='text-4xl font-semiboldbold'>Lorem Lorem ipsum dolor sit. ipsum dolor sit amet consectetur.</Link>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 ">
                <span>
                    Written By .
                </span>
                <Link className='text-blue-800 font-semibold ' >Rajiv Sharma</Link>

                <span>On .</span>
                <Link className='text-blue-800 font-semibold' >Web design</Link>
                <span>2 days ago</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima. Consequuntur sunt facilis veritatis reiciendis eum sapiente maiores illo minus.Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
            <Link to={'/test'} className='text-blue-800 font-semibold underline text-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem