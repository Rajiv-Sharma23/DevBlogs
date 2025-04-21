import { Save,Trash2 } from 'lucide-react';

const PostMenuActions = () => {
  return (
    <div>
        <h1 className="mt-3 mb-3 text-sm font-semibold">Actions</h1>
        <div className="flex items-center gap-2 py-1 text-xs cursor-pointer">
        <Save size={16}/>
        <span>Save this Post</span>
        </div >
        <div className="flex items-center gap-2 py-1 text-sm cursor-pointer text-red-600 font-medium">
        <Trash2 size={16}/>
        <span>Save this Post</span>
        </div>
    </div>
  )
}

export default PostMenuActions