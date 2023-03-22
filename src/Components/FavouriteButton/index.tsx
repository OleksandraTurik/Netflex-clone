import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import React, { FC } from "react";

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
    <div style={{margin: '0 auto'}}>
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
