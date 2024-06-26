import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={clsx(css.wrapperItem)}>
      <img
        className={clsx(css.userImage)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css.userName)}>{name}</p>
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
