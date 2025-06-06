import "./index.css";

let Box = (props) => {
  let { name, description, minLife, maxLife, breedImg } = props;
  return (
    <div className="box-container">
      <img src={breedImg} alt="" className="dog-img" />
      <h1 className="breed-heading">{name}</h1>
      <p className="para-descritipion">{description}</p>
      <p>
        Life Span: {minLife} to {maxLife} Years
      </p>
    </div>
  );
};

export default Box;

//husky img
//"https://media.istockphoto.com/id/1338954116/photo/dog-portrait-outside-at-the-park-on-summer.jpg?s=612x612&w=0&k=20&c=6sRSNWMhZj4QxeTuLS2JZLzjR_os-Gbfnil6mNjga6I="
