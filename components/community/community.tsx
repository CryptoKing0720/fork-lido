import { Section } from '@lidofinance/lido-ui';
import Icon from '@/icons';

export default function Community() {
  return (
    <Section
      id="community"
      rack-content="true"
      data-content-name="Join the Community - main page"
      className="fFRZql"
    >
      <div className="jPEekX eQRLb">
        <h2 color="#273852" className="ckOUoJ">
          Join community
        </h2>
        <p color="#7A8AA0" className="bcHUcI">
          Learn more about Lido and have your say in the future of the Lido
          ecosystem
        </p>
        <div className="giqNGg">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/lido"
            className="kVAprp"
          >
            <div className="lbYdIS">
              <img
                src="/static/images/index/community/discord-logo.svg"
                alt=""
                className="iWGbJd"
              />
              <div className="gFAndk">
                <h2 className="djGFRd">Lido in Discord</h2>
                <p className="KIlrZ">Join the community and ask questions</p>
              </div>
            </div>
            <div className="bDsqGp">
              <img
                src="/static/images/index/community/background.svg"
                alt=""
                className="bJBqen"
                data-xblocker="passed"
                style={{ visibility: 'visible' }}
              />
              <img
                src="/static/images/index/community/background-mobile.svg"
                alt=""
                className="hnjTNk"
                data-xblocker="passed"
                style={{ visibility: 'visible' }}
              />
              <img
                src="/static/images/index/community/person-1.svg"
                alt=""
                className="eqzBrq persone-one"
                data-xblocker="passed"
                style={{ visibility: 'visible' }}
              />
              <img
                src="/static/images/index/community/person-2.svg"
                alt=""
                className="ekGFsI persone-two"
              />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/lidofinance"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Telegram Card"
            className="kOsqMF kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">Telegram</h2>
              <p className="bovbUf">Join chat</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/lidofinance"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Twitter Card"
            className="gwWdip kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">X</h2>
              <p className="bovbUf">Follow @lidofinance</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://research.lido.fi"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Research Forum Card"
            className="jGcChY kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">Research forum</h2>
              <p className="bovbUf">Join discussions</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lidofinance"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Github Card"
            className="BXavH kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">GitHub</h2>
              <p className="bovbUf">Contribute</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blog.lido.fi"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Blog Card"
            className="jGcChY kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">Blog</h2>
              <p className="bovbUf">Learn about Lido</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@lido.fi"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            data-content-piece="Contact us Card"
            className="jGcChY kqgqKB"
          >
            <Icon name="stake" />
            <div className="eSCgxg">
              <h2 className="gixQRA">Contact</h2>
              <p className="bovbUf">Get in touch with info@lido.fi</p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
