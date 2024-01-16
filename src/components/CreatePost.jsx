import { useContext, useRef } from "react"
import { PostList } from '../store/post-list-store'

const CreatePost = () => {

  const { addPost } = useContext(PostList)

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



    addPost(userID, postTitle, postBody, reactions, tags)
  }

  return <form style={{ maxWidth: '650px' }} className="m-5 p-4 border border-primary shadow bg-body-tertiary rounded" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="userID" className="form-label">Enter your user-id here</label>
      <input type="text" ref={userIdElement} className="form-control" id="userID" placeholder="Your user id" />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." />
    </div>
    <div className="mb-3">
      <label htmlFor="content" className="form-label">Post Content</label>
      <textarea type="text" rows={4} ref={postBodyElement} className="form-control" id="content" placeholder="Tell us more about it" />
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of Reactions</label>
      <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your tags</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter your tags using space" />
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default CreatePost