import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendListS}>
      {friends.map(friend => (
        <li className={css.friendListS} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}
