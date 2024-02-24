import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className=" bg-white p-2 my-4 w-3/4 border-solid border-8">
      <div className="chat chat-start py-12 flex flex-col space-y-1">
        <div className="chat-header">
          {name}
          {"  "}
          <time className="text-xs opacity-50">
            <Moment format="YYYY/MM/DD">{date}</Moment>
          </time>
        </div>
        <div className="chat-bubble">{text}</div>
        <div className="chat-footer opacity-50 flex flex-row space-x-2 ">
          {" "}
          {showActions && (
            <>
              <button
                onClick={() => addLike(_id)}
                type="button"
                className=" bg-white"
              >
                <i className="fas fa-thumbs-up transition duration-1000 ease-in-out transform hover:scale-125" />{" "}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>
              <button
                onClick={() => removeLike(_id)}
                type="button"
                className="bg-white"
              >
                <i className="fas fa-thumbs-down transition duration-1000 ease-in-out transform hover:scale-125" />
              </button>
              <Link
                to={`/posts/${_id}`}
                className="btn btn-outline btn-xs transition duration-1000 ease-in-out transform hover:scale-110"
              >
                Discussion{" "}
                {comments.length > 0 && (
                  <span className="comment-count">{comments.length}</span>
                )}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={() => deletePost(_id)}
                  type="button"
                  className="transition duration-1000 ease-in-out transform hover:scale-125"
                >
                  <i className="fas fa-times" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {/* <div>

        {showActions && (
          <>
            <button
              onClick={() => addLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up" />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{" "}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => deletePost(_id)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </>
        )}
      </div> */}
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
