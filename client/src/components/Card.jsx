import React from "react";

function Card(props) {
  return (
    <div className="everything-card mt-10 p-5 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-wrap gap-1 mb-1">
        <b className="title text-white">{props.title}</b>
        <div className="everything-card-img mx-auto">
          <img className="rounded-md" src={props.imgUrl} alt="img" />
        </div>
        <div className="description mt-3">
          <p className="description-text leading-7 text-white">
            {props.description?.substring(0, 200)}
          </p>
        </div>
        <div className="info mt-3">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold text-white">Source:</span>
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link underline break-words text-white"
            >
              {props.source.substring(0, 70)}
            </a>
          </div>
          <div className="origin flex flex-col mt-2">
            <p className="origin-item">
              <span className="font-semibold text-white">Author:</span>
              {props.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold text-white">Published At:</span>
              {props.publishedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
