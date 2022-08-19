import React, {useState} from "react";
import author from "../../database/publication/author.json";
import dataPosts from "../../database/publication/entityPosts.json";
import style from "./publication.module.scss";
import like from "../../access/img/like.png";
import dislike from "../../access/img/dislike.png";
import comment from "../../access/img/comment.png";
import share from "../../access/img/share.png";

function Publication() {
    const [posts, setPosts] = useState(dataPosts);

    function changeAttr(postId, likeOrDislike) {

        const currentPostIndex = posts.findIndex((item) => item.id === postId);

        if (posts[currentPostIndex]['verdict'] != null) {
            if (posts[currentPostIndex]['verdict']) {
                posts[currentPostIndex] = {
                    ...posts[currentPostIndex],
                    like: posts[currentPostIndex]['like'] - 1,
                    ['verdict']: null,
                };
            } else {
                posts[currentPostIndex] = {
                    ...posts[currentPostIndex],
                    dislike: posts[currentPostIndex]['dislike'] - 1,
                    ['verdict']: null,
                };
            }
        } else {
            const changeVerdict = likeOrDislike === 'like';
            posts[currentPostIndex] = {
                ...posts[currentPostIndex],
                [likeOrDislike]: posts[currentPostIndex][likeOrDislike] + 1,
                ['verdict']: changeVerdict,
            };
        }

        setPosts([...posts]);
    }

    return posts.map(el => {
        return (
            <div className={style["main-container"]}  key={el.id}>
                <div className={style.post}>
                    <div className={style.info}>
                        <img className={style.avatar} src={author.avatar}/>
                        <p>
                            <span className={style["info-author"]}> {author.name} </span>
                            <span className={style["info-author"]}> {author.nickname} </span>
                        </p>
                        <p>
                            <span className={style["content-post"]}>{el.content}</span>
                        </p>
                        <img className={style.photo} src={el.photo}/>
                        <p className={style['footer-post']}>
                            <span>
                                <button className={el.verdict ? style["like-true"] : style["like"]} onClick={() => changeAttr(el.id, 'like')}>
                                    <img src={like}/>
                                </button>
                                <label>{el.like}</label>
                            </span>
                            <span>
                                <button className={el.verdict != null && !el.verdict ? style["dislike-true"] : style["dislike"]} onClick={() => changeAttr(el.id, 'dislike')}>
                                    <img src={dislike}/>
                                </button>
                                <label>{el.dislike}</label>
                            </span>
                            <span>
                                <button className={style["comment"]} disabled>
                                    <img src={comment}/>
                                </button>
                                <label>{el.comment}</label>
                            </span>
                            <span>
                                <button className={style.share} disabled>
                                    <img src={share}/>
                                </button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    });

}
export default Publication;