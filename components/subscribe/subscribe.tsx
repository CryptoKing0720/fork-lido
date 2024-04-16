import { Section } from '@lidofinance/lido-ui';

export default function Subscribe() {
  return (
    <Section
      id="subscribe"
      data-track-content="true"
      data-content-name="Subscribe - main page"
      data-content-piece="Subscribe section"
      className="fNiuMi"
    >
      <div className="jPEekX fTgkhj">
        <h2 color="#273852" className="ckOUoJ">
          Subscribe to mailing list
        </h2>
        <p color="#7A8AA0" className="bcHUcI">
          Stay up to date with Lido developments
        </p>
        <form className="gnHWOM bLcskh">
          <div className="gQHFug">
            <label className="jvUywy">Email address</label>
            <input
              className="giuOnT jqTbsd"
              aria-label="Email address"
              autoComplete="username"
              value=""
            />
          </div>
          <button
            radius="small"
            width={130}
            height={44}
            className="daQRBr bCOioI"
          >
            Subscribe
            <div className="ecPkIt">
              <div color="rgba(255, 255, 255, 0.37)" className="goEttg" />
            </div>
          </button>
        </form>
        <p className="kxfXwv">
          By subscribing you accept{' '}
          <a
            target="_blank"
            rel="noopener"
            href="/privacy-notice"
            className="kgVEtH"
          >
            Privacy Notice
          </a>
        </p>
      </div>
    </Section>
  );
}
