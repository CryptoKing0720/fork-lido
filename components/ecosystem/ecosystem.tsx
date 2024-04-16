import Icon from '@/icons';
import { Section } from '@lidofinance/lido-ui';

export default function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      data-track-content="true"
      data-content-name="A growing Lido ecosystem section"
      data-content-piece="Whole ecosystem section"
      className="eHkkJu"
    >
      <div className="jPEekX dvniNt">
        <h2 color="#273852" className="ckOUoJ">
          Lido ecosystem
        </h2>
        <p color="#7A8AA0" className="bcHUcI">
          Explore apps and services within Lido ecosystem to get more benefits
          with your staked tokens.
        </p>
        <div className="jSQWGv">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://metamask.io/"
            className="iZicED eYeNFX"
          >
            <Icon name="metamask" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">MetaMask</h2>
              <p className="hmFjBK">
                A crypto wallet &amp; gateway to blockchain apps.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://curve.fi/"
            className="iZicED eYeNFX"
          >
            <Icon name="curve" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">Curve</h2>
              <p className="hmFjBK">
                Use stETH or wstETH as liquidity to the respective pool to get
                more rewards.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.aave.com"
            className="iZicED eYeNFX"
          >
            <Icon name="aave" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">AAVE</h2>
              <p className="hmFjBK">
                Borrow tokens against your stETH, wstETH and stMATIC
                while&nbsp;retaining their staking rewards whilst stETH, wstETH
                and stMATIC is supplied as collateral.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.1inch.io/#/1/swap/wstETH/DAI"
            className="iZicED eYeNFX"
          >
            <Icon name="oneinch" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">1inch</h2>
              <p className="hmFjBK">
                Exchange, get daily staking rewards and provide liquidity with
                stETH, wstETH and stMATIC.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ledger.com/"
            className="iZicED eYeNFX"
          >
            <Icon name="ledgercryptowallet" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">Ledger crypto wallet</h2>
              <p className="hmFjBK">
                Stake your tokens directly from Ledger crypto wallet.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://balancer.fi/"
            className="iZicED eYeNFX"
          >
            <Icon name="balancer" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">Balancer</h2>
              <p className="hmFjBK">
                Provide liquidity to Balancer MetaStable Pools to liquidity mine
                LDO and BAL.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://uniswap.org"
            className="iZicED eYeNFX"
          >
            <Icon name="uniswap" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">UniSwap</h2>
              <p className="hmFjBK">
                Create a new liquidity pool, provide liquidity, and swap tokens.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://makerdao.com/en/"
            className="iZicED eYeNFX"
          >
            <Icon name="makerdao" />
            <div className="kJLGKq">
              <h2 className="jEEHkW">MakerDAO</h2>
              <p className="hmFjBK">
                Use your wstETH for borrowing or multiplying while getting
                staking rewards.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="/lido-ecosystem"
            className="iZicED fKRrAr"
          >
            <div className="kJLGKq rriDS">
              <h2 className="jEEHkW dMnfXC">106</h2>
              <p className="hmFjBK">ecosystem applications</p>
            </div>
            <span className="iCfgvY">View all</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
