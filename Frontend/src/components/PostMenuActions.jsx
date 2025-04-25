import { useUser } from "@clerk/clerk-react";
import { Save, Trash2 } from "lucide-react";

const PostMenuActions = ({ post }) => {
  // const { user } = useUser();
  // const { getToken } = useAuth();
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  // return <div className="mt-4 text-2xl text-red-600">
  //   Hello {user.firstName}!
  //   <br /> hey {user.username} {console.log("user", user)};

  // </div>;

  return (
    <div>
      <h1 className="mt-3 mb-3 text-sm font-semibold">Actions</h1>
      <div className="flex items-center gap-2 py-1 text-xs cursor-pointer">
        <Save size={16} />
        <span>Save this Post</span>
      </div>

      {console.log(post?.user?.email)}

      {user && post?.user?.email === user.primaryEmailAddress.emailAddress && (
        <div className="flex items-center gap-2 py-1 text-sm cursor-pointer text-red-600 font-medium">
          <Trash2 size={16} />
          <span>Delete this Post</span>
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;
