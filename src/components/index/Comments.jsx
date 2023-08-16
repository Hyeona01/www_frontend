import { useState, useEffect } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const Comments = ({
  setCommentFold,
  commentFold,
  handlewidth,
  handleheight,
  handlefsize,
  record,
}) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수
  let cnt = record.record_comments;
  console.log("여기: ",record);

  return (
    <CommentStyle
      handlewidth={handlewidth}
      handleheight={handleheight}
      handlefsize={handlefsize}
      onClick={() => setCommentFold(commentFold ? false : true)}
    >
      <i className="fas fa-comment-alt"></i> &nbsp;
      {/* <BtnText>{record.record_comments.length}</BtnText> &nbsp; */}
      {/* <BtnText>{comments}</BtnText> &nbsp; */}
      {commentFold ? (
        <i className="fas fa-caret-down"></i>
      ) : (
        <i className="fas fa-caret-up"></i>
      )}
    </CommentStyle>
  );
};

export default Comments;
