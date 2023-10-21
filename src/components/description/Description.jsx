import style from "./description.module.css";

const Description = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/300/300"
        alt="random image"
        className={style.image}
      />
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae
        non illum quod rerum nostrum dolores doloribus, numquam pariatur labore!
      </p>
    </div>
  );
};

export default Description;
