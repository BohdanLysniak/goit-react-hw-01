import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.containerImageAndName)}>
        <img className={clsx(css.imagePhoto)} src={image} alt="User avatar" />
        <p className={clsx(css.userName)}>{name}</p>
        <p className={clsx(css.userTag)}>@{tag}</p>
        <p className={clsx(css.userLocation)}>{location}</p>
      </div>

      <ul className={clsx(css.userDataList)}>
        <li className={clsx(css.userDataItem)}>
          <span>Followers</span>
          <span className={clsx(css.accentSpan)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.userDataItem)}>
          <span>Views</span>
          <span className={clsx(css.accentSpan)}>{stats.views}</span>
        </li>
        <li className={clsx(css.userDataItem)}>
          <span>Likes</span>
          <span className={clsx(css.accentSpan)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
