export default function Card(props) {
  const handleClick = () => {
    window.open(props.googleMapsUrl, "_blank");
  };

  return (
    <div className="Card">
      <div className="Img-Container">
        <img src={props.imageUrl} width="100%"></img>
        <img src={props.imageUrl} width="100%"></img>
        <img src={props.imageUrl} width="100%"></img>
      </div>
      <h1>
        {props.location}{" "}
        <span onClick={handleClick} className="Pin">
          📌
        </span>
      </h1>
      <span className="Dates">{props.dates}</span>
      <p className="Des">{props.description}</p>
    </div>
  );
}
