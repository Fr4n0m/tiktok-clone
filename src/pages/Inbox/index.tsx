import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { UI_TEXT } from "../../content/uiText";
import { MOCK_INBOX_NOTIFICATIONS } from "../../data/mockSocial";
import { InboxNotification } from "../../types/social";

const FILTERS: { id: InboxNotification["category"]; label: string }[] = [
  { id: "all", label: UI_TEXT.inboxPage.filters.all },
  { id: "mentions", label: UI_TEXT.inboxPage.filters.mentions },
  { id: "comments", label: UI_TEXT.inboxPage.filters.comments },
];

const Inbox = () => {
  const [activeFilter, setActiveFilter] = useState<InboxNotification["category"]>("all");

  const notifications = useMemo(
    () =>
      MOCK_INBOX_NOTIFICATIONS.filter(
        (item) => activeFilter === "all" || item.category === activeFilter
      ),
    [activeFilter]
  );

  return (
    <section className={styles.inbox}>
      <header className={styles.header}>
        <h1>{UI_TEXT.inboxPage.title}</h1>
        <button type="button">{UI_TEXT.inboxPage.markRead}</button>
      </header>

      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <button
            className={filter.id === activeFilter ? styles.active : ""}
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.notifications}>
        {notifications.map((notification) => (
          <article className={styles.notification} key={notification.id}>
            <img alt={notification.title} className={styles.avatar} src={notification.avatar} />
            <div className={styles.body}>
              <strong>{notification.title}</strong>
              <p>{notification.subtitle}</p>
            </div>
            <div className={styles.meta}>
              <span>{notification.timeAgo}</span>
              {notification.unread ? <i /> : null}
            </div>
          </article>
        ))}
      </div>

      <p className={styles.disclaimer}>{UI_TEXT.mockDisclaimer}</p>
    </section>
  );
};

export default Inbox;
