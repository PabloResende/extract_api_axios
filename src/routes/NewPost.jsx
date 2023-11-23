// import React from "react";
import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título do post:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite um título"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite um conteúdo:"
          ></textarea>
        </div>
        <input type="button" value={"criar post"} className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
