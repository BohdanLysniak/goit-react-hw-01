import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(friend => (
        <li className={clsx(css.friendItem)} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
