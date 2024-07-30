import { useContext, useRef } from "react"
import { PostList } from '../store/post-list-store'
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
  const { addPost } = useContext(PostList)
  const navigate = useNavigate()

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    const userID = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userID,
        tags: tags
      })
    })
      .then(res => res.json())
      .then((post) => {
        addPost(post)
        navigate('/')
      });
  }

  return <form style={{ maxWidth: '650px' }} className="m-5 p-4 border border-primary shadow bg-body-tertiary rounded" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="userID" className="form-label">Enter your user-id here</label>
      <input type="text" ref={userIdElement} className="form-control" id="userID" placeholder="Your user id" required />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." required />
    </div>
    <div className="mb-3">
      <label htmlFor="content" className="form-label">Post Content</label>
      <textarea type="text" rows={4} ref={postBodyElement} className="form-control" id="content" placeholder="Tell us more about it" required />
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of Reactions</label>
      <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" required />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your tags</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter your tags using space" required />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

// Use following function for form action with react-router-dom form 
// export async function createPostAction(data) {
//   const formData = await data.request.formData()
//   const postData = Object.fromEntries(formData)
//   postData.tags = postData.tags.split(" ")
//   console.log("🚀 ~ createPostAction ~ postData:", postData)

//   fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then((post) => {
//      console.log(post)
//     });

//     return redirect('/')
// }


export default CreatePost