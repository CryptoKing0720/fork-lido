import { Section } from '@lidofinance/lido-ui';

export default function LidoDAO() {
  return (
    <Section
      id="lido-dao"
      data-track-content="true"
      data-content-name="the Lido DAO"
      className="ctOqQm"
    >
      <div className="jPEekX iYQIGQ">
        <h2 className="jsPFib">Lido DAO</h2>
        <p color="#7A8AA0" className="bcHUcI">
          The Lido DAO is a Decentralized Autonomous Organization that decides
          on the key upgrades and key parameters of liquid staking protocols
          through the voting power of governance token (LDO) tokens.
        </p>
        <div className="eHEXPi">
          <a className="lnAWBA" href="/governance">
            <img
              src="/static/images/index/lido-dao/governance-process.svg"
              alt=""
              className="dBHbiJ"
              data-xblocker="passed"
              style={{ visibility: 'visible' }}
            />
            <h3 className="hYpkQD">Governance process</h3>
            <p className="gWmvvl">
              Explore how the decisions in Lido governance process are made.
            </p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://research.lido.fi"
            className="jxplTN"
          >
            <img
              src="/static/images/index/lido-dao/research-forum.svg"
              alt=""
              className="eFxfYt"
            />
            <div className="nyzPf">
              <h3 className="ekePCt">Research Forum</h3>
              <p className="gCbmns">
                Join the forum to find answers or discuss your ideas for Lido
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dao-agreements.lido.fi"
            className="jxplTN"
          >
            <img
              src="/static/images/index/lido-dao/key-governance-proposals.svg"
              alt=""
              className="eFxfYt"
            />
            <div className="nyzPf">
              <h3 className="ekePCt">Key governance proposals</h3>
              <p className="gCbmns">
                All key governance decisions and related Snapshots/Aragons in
                one place
              </p>
            </div>
          </a>
          <a className="jxplTN" href="/lego">
            <img
              src="/static/images/index/lido-dao/lego.svg"
              alt=""
              className="eFxfYt"
            />
            <div className="nyzPf">
              <h3 className="ekePCt">LEGO</h3>
              <p className="gCbmns">
                Explore how Lido Ecosystem Grants Organisation works
              </p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
