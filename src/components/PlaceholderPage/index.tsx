import { UI_TEXT } from "../../content/uiText";

const PlaceholderPage = ({ className }) => {
  return (
    <section className={className}>
      <h1>{UI_TEXT.placeholder.title}</h1>
      <p>{UI_TEXT.placeholder.description}</p>
    </section>
  );
};

export default PlaceholderPage;
