import React from "react";
import { Image } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import './style.css'

const Profile = () => {
  const {user} = useTypedSelector((state) => state.auth)

  return (
    <div>
      <Image className="profile-image" width={150} preview={false} src={user.photoURL || undefined} />
    </div>
  );
};

export default Profile;
