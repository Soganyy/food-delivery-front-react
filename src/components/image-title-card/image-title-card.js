import React from "react";
import './image-title-card.css'
import { EmojiSmile } from 'react-bootstrap-icons';

import imageCardImg from '../../assets/image-card-default.png'

const ImageTitleCard = ({ name, description, price, height}) => {

    return (
        <div>
            <div className="image-title-container">
                <div className="image-card-container" style={{ height: height }}>
                    <img src={imageCardImg} className="card-img-top" alt="Card Header" />
                    <div className="image-card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{description}</p>
                    </div>
                    <div className="image-card-footer">
                        <span>

                            {price} $
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageTitleCard;