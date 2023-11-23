import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const creatPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });
  };

  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => creatPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título do post:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite um título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite um conteúdo:"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="button" value={"criar post"} className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
