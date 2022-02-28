import { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

// import {
//   getComments as getCommentsApi,
//   createComment as createCommentApi,
//   updateComment as updateCommentApi,
//   deleteComment as deleteCommentApi,
// } from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [comments, setComments] = useState([]);
  // const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState();
  const rootComments = comments.filter((comment) => comment.parentId === "0");
  console.log(rootComments);
  const getReplies = (commentId) =>
    comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const fetchComments = async () => {
    const result = await axios.get("http://localhost:5000/comments", {
      headers: {
        "Content-type": "application/json",
      },
    });
    setComments(result.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const addComment = async (text) => {
    const newPost = {
      userId: currentUserId,
      userName: currentUserId,
      body: text,
      parentId: 0,
    };
    console.log(newPost);
    await axios
      .post("http://localhost:5000/comments", newPost)
      .then((response) => {
        setComments([response.data, ...comments]);
      });
  };

  // const updateComment = async (text, commentId) => {
  //     updateCommentApi(text).then(() => {
  //         const updatedBackendComments = comments.map((comment) => {
  //             if (comment._id === commentId) {
  //                 return { ...comment, body: text };
  //             }
  //             return comment;
  //         });
  //         setComments(updatedBackendComments);
  //         setActiveComment(null);
  //     });
  // };

  const updateComment = async (text, commentId) => {
    await axios.patch(`http://localhost:5000/comments/${commentId}`, {
      body: text,
    });
    // .then((response) => {
    //     console.log(response.data)
    //     setComments(comments => {
    //         return [response]
    //     });
    fetchComments();
    // setComments([response.data]);
    // }).catch(err => {
    //     console.log(err)
    // })
    // updateCommentApi(text).then(() => {
    //     const updatedBackendComments = comments.map((comment) => {
    //         if (comment._id === commentId) {
    //             return { ...comment, body: text };
    //         }
    //         return comment;
    //     });
    //     setComments(updatedBackendComments);
    //     setActiveComment(null);
    // });
    setActiveComment(null);
  };

  const deleteComment = async (commentId) => {
    await axios
      .delete(`http://localhost:5000/comments/${commentId}`)
      .then((response) => {
        console.log(response.data);
        setComments((comments) => {
          return [response];
        });
        fetchComments();
        // setComments([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const deleteComment = (commentId) => {
  //     if (window.confirm("Are you sure you want to remove comment?")) {
  //         deleteCommentApi().then(() => {
  //             const updatedBackendComments = comments.filter(
  //                 (comment) => comment._id !== commentId
  //             );
  //             setComments(updatedBackendComments);
  //         });
  //     }
  // };

  // const addComment = (text, parentId) => {
  //     createCommentApi(text, parentId).then((comment) => {
  //         setComments([comment, ...comments]);
  //         setActiveComment(null);
  //     });
  // };

  // useEffect(() => {
  //     getCommentsApi().then((data) => {
  //         setBackendComments(data);
  //     });
  // }, []);

  console.log(comments);
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            replies={getReplies(comment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
        {/* {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                    />
                ))} */}
      </div>
    </div>
  );
};

export default Comments;
