import React from "react";
import ReactDom from "react-dom";

function Comment(props) {
  return (
    <div className="comment">
      <CommentUser user={props.author} />
      <CommentDate date={props.date} />
      <CommentText text={props.text} />
    </div>
  );
}

function CommentUser(props) {
  return (
    <div className="comment-user">
      <img className="comment-user-avatar" src={props.user.avatarUrl} alt={props.user.name} />
      <div className="comment-user-name">
        {props.user.name}
      </div>
    </div>
  );
}

function CommentDate(props) {
  return (
    <div className="comment-date">
      {formatDate(props.date)}
    </div>
  );
}

function CommentText(props) {
  return (
    <span className="comment-text">
      {props.text}
    </span>
  );
}

function formatDate(date) {
  return date.toLocaleTimeString();
}

const comment = {
  date: new Date(),
  text: 'Where\'s my ball of yarn?',
  author: {
    name: 'Kitty',
    avatarUrl: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/140.jpg'
  }
};

ReactDom.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById('root')
);
