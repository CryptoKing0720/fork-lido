import { Section } from '@lidofinance/lido-ui';

export default function NotificationBot() {
  return (
    <Section id="notification-bot" className="CcaPF">
      <div className="jPEekX kMgWUQ">
        <img
          src="/static/images/index/notification-bot/telegram-logo.svg"
          alt=""
          className="dXQRWn"
        />
        <div className="kRYQFA">
          <h2 className="eYnDSq">Governance Notification Bot</h2>
          <p className="bgnQlz">
            Stay up to speed with Lido governance ongoing votings.
          </p>
        </div>
        <a
          href="https://t.me/lido_dao_bot"
          width={146}
          height={56}
          target="_blank"
          rel="noreferrer"
          className="iiFgYL ePfsx"
        >
          Get notified
        </a>
      </div>
    </Section>
  );
}
