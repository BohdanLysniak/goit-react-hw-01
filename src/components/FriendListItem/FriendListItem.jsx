import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline }
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          css.textStatus,
          isOnline === true ? css.isOnline : css.isOffline
        )}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
