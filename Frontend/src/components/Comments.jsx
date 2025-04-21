import Comment from '../components/Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8  lg:w-3/5 mb-10'>
        <h1 className='text-xl text-gray-500 underline'>Comments</h1>
        <div className='flex items-center justify-between gap-4 w-full'>
            <textarea placeholder='Add your Comments' className='flex bg-white rounded-xl p-4 w-full'/>
            <button className='bg-blue-800 text-white px-4 py-3 font-medium rounded-xl'>Send</button>
        </div>

        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments