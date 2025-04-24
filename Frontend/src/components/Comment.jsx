import { format } from "timeago.js"
import Image from "./Image"


const Comment = ({comment}) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2 lg:mb-6 text-sm lg:text-lg">
        <div className="flex items-center gap-3 text-gray-500">
           {comment.user.img && <Image src={comment.user.img}
            className='w-10 h-10 rounded-full object-cover'
            w='40'
            />}
            <span className="font-medium text-sm">{comment.user.username}</span>
            <span className="font-medium text-sm">{format(comment.createdAt)}</span>
        </div>
        <div className="mt-4">
            <p>{comment.desc}</p>
        </div>
    </div>
  )
}

export default Comment