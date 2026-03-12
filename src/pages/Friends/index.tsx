import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";
import {
  FRIEND_ACTIVITY_LABELS,
  MOCK_FRIEND_ACTIVITY,
  MOCK_FRIEND_SUGGESTIONS,
} from "../../data/mockSocial";

const Friends = () => {
  return (
    <section className={styles.friends}>
      <header className={styles.header}>
        <h1>{UI_TEXT.friendsPage.title}</h1>
        <p>{UI_TEXT.friendsPage.subtitle}</p>
      </header>

      <div className={styles.suggestionList}>
        {MOCK_FRIEND_SUGGESTIONS.map((friend) => (
          <article className={styles.card} key={friend.id}>
            <img alt={friend.name} className={styles.avatar} src={friend.avatar} />
            <div className={styles.cardBody}>
              <strong>{friend.name}</strong>
              <span>@{friend.username}</span>
              <small>
                {friend.mutualFollowers} {UI_TEXT.friendsPage.mutualFollowers}
              </small>
            </div>
            <button type="button">{UI_TEXT.friendsPage.connectButton}</button>
          </article>
        ))}
      </div>

      <h2>{UI_TEXT.friendsPage.activityTitle}</h2>
      <div className={styles.activityList}>
        {MOCK_FRIEND_ACTIVITY.map((item) => (
          <article className={styles.activity} key={item.id}>
            <img alt={item.username} className={styles.avatar} src={item.avatar} />
            <p>
              <strong>@{item.username}</strong> {FRIEND_ACTIVITY_LABELS[item.type]}
            </p>
            <span>{item.timeAgo}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Friends;
