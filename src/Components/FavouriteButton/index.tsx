import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { addDoc } from "firebase/firestore";
import React, { FC, useState } from "react";
import { db } from "../../firebase";

interface FavouriteButtonProps {
  onFavouriteClick: () => void;
  isFavourite: boolean;
}

const FavouriteButton: FC<FavouriteButtonProps> = ({
  onFavouriteClick,
  isFavourite,
}) => {
  const handleClickStar = async () => {
    onFavouriteClick && onFavouriteClick()
    if (!isFavourite) {
      message.success("додано до обраних");
    } else {
      message.success("видалено з обраних");
    }
  };

  return (
    <div>
      <Button
        onClick={handleClickStar}
        className="btn-star"
        icon={isFavourite ? <StarFilled /> : <StarOutlined />}
        type="text"
      ></Button>
    </div>
  );
};

export default FavouriteButton;
