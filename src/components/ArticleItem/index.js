import React from 'react';
import classNames from 'classnames';

const ArticleItem = ({ layoutSmall = false, title, thumbnail, url, preview, detail }) => {
  return (
    <article className={classNames('article-item', { 'layout-small': layoutSmall })}>
      <div className="article-item-wrap">
        <div className="article-item-image">
          <a title={title} href={`/news/${url}`}>
            <img src={thumbnail} className="lazyload" data-src={thumbnail} alt={title} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 48 48"
              xmlSpace="preserve"
            >
              <path
                d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
                fill="#ffffff"
                data-original="#ffffff"
                className=""
              ></path>
            </svg>
          </a>
        </div>
        <div className="article-item-detail">
          <h3 className="article-item-detail-name">
            <a title={title} href={`/news/${url}`}>
              {title}
            </a>
          </h3>
          <strong className="article-item-detail-info">{detail}</strong>
          <p className="article-item-detail-des">{preview}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleItem;
