import { StarOutlined } from "@ant-design/icons";
import React from "react";

import "./style.css";

interface FilmCardProps {
  title: string;
  image: string;
}

export const FilmCard = ({ image, title }: FilmCardProps) => {
  return (
    <div className="film-card">
      <img className="film-card-image" src={image} alt={title} />
      <div className="card-details">
        <h1 className="film-card-title"> {title} </h1>
        <StarOutlined />
      </div>
    </div>
  );
};
