import Image from "./Image"


const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2 lg:mb-6 text-sm lg:text-lg">
        <div className="flex items-center gap-3 text-gray-500">
            <Image src={"/userImg.jpeg"}
            className='w-10 h-10 rounded-full object-cover'
            w='40'
            />
            <span className="font-medium text-sm">Rajiv Sharma .</span>
            <span className="font-medium text-sm">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, soluta ipsam voluptates corrupti tenetur perspiciatis, quae velit in totam autem quisquam temporibus quaerat consequuntur, reiciendis tempore veniam. Unde, cum totam?</p>
        </div>
    </div>
  )
}

export default Comment