import React, { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "../reducer/postReducer";
import { ACTION_TYPES } from "../reducer/postActionTypes";
export const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  // const [loading, setLoading] = useState(false);
  // const [post, setPost] = useState({});
  // const [error, setError] = useState(false);

  // const handleFetch = () => {
  //   setLoading(true);
  //   setError(false)
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPost(data);
  //       setLoading(false);
  //       console.log("post", data);
  //     })
  //     .catch((err) => {
  //       setError(true);
  //       setLoading(false);
  //     });
  // };
  const handleFetchReducer = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
        console.log(data);
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    <>
      <div>
        <h3>-----USE REDUCER PRACTICES----</h3>
        {/* <button onClick={handleFetch}>
          {loading ? "Wait .." : "Fetch the post"}
        </button> */}
        <button onClick={handleFetchReducer}>
          {state.loading ? "Wait .." : "Fetch the post"}
        </button>
        <p>{state.post?.title}</p>
        <span>{state.error && "something went error"}</span>
      </div>
    </>
  );
};
