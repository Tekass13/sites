import { useParams } from "react-router-dom";

const post = () => {
  const { postId } = useParams();

  return <h2>Post : {postId}</h2>;
};

export default post;