import React from "react";
import styles from "./styles.module.css";

const Upload = () => {
  return (
    <div className={styles.upload}>
      <h1>Cargar video</h1>
      <p>Este video se publicará en el perfil de @midudev</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg"
              width="49"
            />
            {renderDndContent()}
          </div>
        </div>

        <label>
          leyenda
          <input name="description" placeholder="" />
        </label>

        <button>Publicar</button>
      </form>
    </div>
  );
};

export default Upload;
