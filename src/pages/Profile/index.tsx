import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";
import {
  MOCK_PROFILE,
  MOCK_PROFILE_ANALYTICS,
  MOCK_PROFILE_STATS,
  MOCK_PROFILE_VIDEOS,
} from "../../data/mockSocial";

const Profile = () => {
  return (
    <section className={styles.profile}>
      <header className={styles.header}>
        <img alt={MOCK_PROFILE.name} className={styles.avatar} src={MOCK_PROFILE.avatar} />
        <h1>{MOCK_PROFILE.name}</h1>
        <p>@{MOCK_PROFILE.username}</p>
        <button type="button">{UI_TEXT.profilePage.editProfile}</button>
      </header>

      <div className={styles.stats}>
        <article>
          <strong>{MOCK_PROFILE_STATS.following}</strong>
          <span>{UI_TEXT.profilePage.following}</span>
        </article>
        <article>
          <strong>{MOCK_PROFILE_STATS.followers}</strong>
          <span>{UI_TEXT.profilePage.followers}</span>
        </article>
        <article>
          <strong>{MOCK_PROFILE_STATS.likes}</strong>
          <span>{UI_TEXT.profilePage.likes}</span>
        </article>
      </div>

      <section className={styles.bio}>
        <h2>{UI_TEXT.profilePage.bioTitle}</h2>
        <p>{MOCK_PROFILE.bio}</p>
      </section>

      <section className={styles.analytics}>
        <h2>{UI_TEXT.profilePage.analytics}</h2>
        <div>
          <article>
            <span>{UI_TEXT.profilePage.profileViews}</span>
            <strong>{MOCK_PROFILE_ANALYTICS.profileViews}</strong>
          </article>
          <article>
            <span>{UI_TEXT.profilePage.postViews}</span>
            <strong>{MOCK_PROFILE_ANALYTICS.postViews}</strong>
          </article>
          <article>
            <span>{UI_TEXT.profilePage.likesThisWeek}</span>
            <strong>{MOCK_PROFILE_ANALYTICS.likesThisWeek}</strong>
          </article>
        </div>
      </section>

      <section className={styles.content}>
        <h2>{UI_TEXT.profilePage.contentGrid}</h2>
        <div className={styles.grid}>
          {MOCK_PROFILE_VIDEOS.map((video) => (
            <article key={video.id}>
              <img alt={video.views} src={video.cover} />
              <span>{video.views}</span>
            </article>
          ))}
        </div>
      </section>

      <p className={styles.disclaimer}>{UI_TEXT.mockDisclaimer}</p>
    </section>
  );
};

export default Profile;
