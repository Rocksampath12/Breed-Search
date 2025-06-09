import "./index.css";

import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

let Box = (props) => {
  let {obj1} = props
  let { name, description, minLife, maxLife, breedImg } = obj1;
  return <Popup
        trigger={<button className="button box-container"> 
          <div className="box-c">
            <img src={breedImg} alt="" className="dog-img" />
            <h1 className="breed-heading">{name}</h1>
            <p className="para-descritipion">{description}</p>
            <p>
              Life Span: {minLife} to {maxLife} Years
            </p>
          </div> 
        </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <div className="close-button">
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
            <div className="box-container1">
            <img src={breedImg} alt="" className="dog-img" />
            <h1 className="breed-heading">{name}</h1>
            <p className="para-descritipion">{description}</p>
            <p>
              Life Span: {minLife} to {maxLife} Years
            </p>
          </div>
          </div>
        )}
      </Popup>
};

export default Box;

