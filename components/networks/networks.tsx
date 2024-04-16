import { Section } from '@lidofinance/lido-ui';
import Icon from '@/icons';

export default function Networks() {
  return (
    <Section
      id="networks"
      data-track-content="true"
      data-content-name="Supported networks - main page"
      className="dPYydn"
    >
      <div className="jPEekX cvZsSa">
        <h2 style={{ color: '#273852' }} className="ckOUoJ">
          Supported networks
        </h2>

        <p style={{ color: '#273852' }} className="idGzHz">
          Lido lets you stake tokens from many networks. Choose a network below
          to get started.
        </p>
        <div className="bdCXAg">
          <div
            data-track-content="true"
            data-content-name="Supported networks - main page"
            data-content-piece="Ethereum Card"
            data-testid="ethereum-card"
            className="hlKKFO hddJCV"
          >
            <a className="kcgZLD" href="/scorecard">
              Scorecard
            </a>
            <img
              src="/static/images/index/network/ethereum-logo.svg"
              alt=""
              className="ycWqA"
            />
            <h2 className="jMbxOo">Ethereum</h2>
            <p className="VeNQE">
              Stake any amount of ETH, get daily staking rewards and use your
              (w)stETH across Ethereum Ecosystem and L2.
            </p>
            <div className="kSVjsm">
              <div className="goBVcP">
                <span data-testid="apr" className="eZZNLu">
                  3.2%
                </span>
                <div className="kUCvMN">
                  <p className="yPZii">APR</p>
                  <div className="hVkIJt">
                    <Icon
                      color="#7A8AA0"
                      height="14px"
                      width="14px"
                      name="info"
                    />
                    <div className="imsQcc">
                      Moving average of APR for 7 days period.
                    </div>
                  </div>
                </div>
              </div>
              <div className="fExnZe" />
              <div className="goBVcP">
                <span data-testid="staked" className="KcnFA">
                  $34,383,304,655
                </span>
                <p className="yPZii">Staked</p>
              </div>
            </div>
            <div className="gnalnx">
              <a href="/ethereum" className="lmlpeK grjVHk">
                Learn more
              </a>
              <a
                href="https://stake.lido.fi"
                target="_blank"
                rel="noreferrer"
                className="lmlpeK cFupCT"
              >
                Stake now
              </a>
            </div>
          </div>
          <div
            data-track-content="true"
            data-content-name="Supported networks - main page"
            data-content-piece="Polygon Card"
            data-testid="polygon-card"
            className="hlKKFO hddJCV"
          >
            <img
              src="/static/images/index/network/polygon-logo.svg"
              alt=""
              className="ycWqA"
            />
            <h2 className="jMbxOo">Polygon</h2>
            <p className="VeNQE">
              Stake MATIC tokens to support network decentralisation and watch
              your stMATIC value grow. Staking does not mean locking anymore.
            </p>
            <div className="kSVjsm">
              <div className="goBVcP">
                <span data-testid="apr" className="eZZNLu">
                  4.3%
                </span>
                <div className="kUCvMN">
                  <p className="yPZii">APR</p>
                </div>
              </div>
              <div className="fExnZe" />
              <div className="goBVcP">
                <span data-testid="staked" className="KcnFA">
                  $128,562,769
                </span>
                <p className="yPZii">Staked</p>
              </div>
            </div>
            <div className="gnalnx">
              <a href="/polygon" className="lmlpeK grjVHk">
                Learn more
              </a>
              <a
                href="https://polygon.lido.fi"
                target="_blank"
                rel="noreferrer"
                className="lmlpeK cFupCT"
              >
                Stake now
              </a>
            </div>
          </div>
          <div className="dctCXn cMBNwa">
            <div className="cQeTWe">
              <Icon className="sc-584cb50d-2 dunqKP" name="arbitrum" />
              <Icon className="sc-584cb50d-2 dunqKP" name="optimism" />
              <Icon className="sc-584cb50d-2 dunqKP" name="polygon" />
              <Icon className="sc-584cb50d-2 dunqKP" name="base" />
              <Icon className="sc-584cb50d-2 dunqKP" name="zksync" />
              <Icon className="sc-584cb50d-2 dunqKP" name="mantle" />
              <Icon className="sc-584cb50d-2 dunqKP" name="linea" />
              <Icon className="sc-584cb50d-2 dunqKP" name="scroll" />
            </div>
            <h2 className="kykFrt">Meet Lido on L2</h2>
            <p className="gAvPeT">
              Get wstETH and enjoy reduced gas fees across various DeFi
              integrations within the L2 ecosystem.
            </p>
            <div className="bMgMoN">
              <a href="/lido-on-l2" className="lmlpeK gDJBHQ">
                Learn more
              </a>
              <a
                href="/lido-ecosystem?criteria=or&networks=arbitrum%2Coptimism%2Cbase%2Czksync+era%2Cmantle%2Clinea%2Cscroll%2Cpolygon&tokens=wsteth"
                target="_blank"
                rel="noreferrer"
                className="lmlpeK grpzdb"
              >
                Explore DeFi
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lmFTcU">
        <img
          src="/static/images/index/network/beach-1.svg"
          alt=""
          className="bdZZfY"
          data-xblocker="passed"
          style={{ visibility: 'visible' }}
        />
        <img
          src="/static/images/index/network/stone-1.svg"
          alt=""
          className="KcQCu"
        />
        <img
          src="/static/images/index/network/stone-2.svg"
          alt=""
          className="irdpcA"
        />
      </div>
      <div className="ckyhHS">
        <img
          src="/static/images/index/network/beach-2.svg"
          alt=""
          className="cGxdqZ"
          data-xblocker="passed"
          style={{ visibility: 'visible' }}
        />
      </div>
      <div className="hqYAJa">
        <img
          src="/static/images/index/network/plant-1.svg"
          alt=""
          className="iGDvTr"
          data-xblocker="passed"
          style={{ visibility: 'visible' }}
        />
        <img
          src="/static/images/index/network/plant-2.svg"
          alt=""
          className="cmQpUB"
          data-xblocker="passed"
          style={{ visibility: 'visible' }}
        />
      </div>
    </Section>
  );
}
