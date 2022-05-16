import "../4.2/Cards.css";

const FuncCards = (props) => {
  return (
    <div className="card">
      <img img src={props.data.url} />
      <h2>{props.data.title}</h2>
      <p>{props.data.text}</p>
      <div>
        <span>
          <a href={props.data.link1}>link1</a>
        </span>
        <span>
          <a href={props.data.link2}>link2</a>
        </span>
      </div>
    </div>
  );
};

export default FuncCards;
