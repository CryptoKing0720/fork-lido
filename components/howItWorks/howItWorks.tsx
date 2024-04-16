import Icon from '@/icons';
import { Section } from '@lidofinance/lido-ui';

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      data-track-content="true"
      data-content-name="How lido works"
      data-content-piece="How Lido Works section"
      className="eVfotY"
    >
      <div className="jPEekX gNkwKx">
        <h2 color="#273852" className="ckOUoJ">
          How Lido works
        </h2>
        <div className="qBbqZ">
          <div className="eHOiCs cvLIKg">
            <span className="jnkCWc">Step 1</span>
            <div className="gnwcLg">
              <Icon name="stake" />
            </div>
            <div className="dNhjSH">
              <span className="jnkCWc DBjfw">Step 1</span>
              <h2 className="kYvZvy">Stake</h2>
              <p className="dmYCHD">
                Stake any amount of your tokens to access daily staking rewards
              </p>
            </div>
          </div>
          <div className="eHOiCs cvLIKg">
            <span className="jnkCWc">Step 2</span>
            <div className="gnwcLg">
              <Icon name="stake" />
            </div>
            <div className="dNhjSH">
              <span className="jnkCWc DBjfw">Step 2</span>
              <h2 className="kYvZvy">Receive stToken</h2>
              <p className="dmYCHD">
                Receive liquid stTokens and start receiving rewards immediately
              </p>
            </div>
          </div>
          <div className="eHOiCs cvLIKg">
            <span className="jnkCWc">Step 3</span>
            <div className="gnwcLg">
              <Icon name="stake" />
            </div>
            <div className="dNhjSH">
              <span className="jnkCWc DBjfw">Step 3</span>
              <h2 className="kYvZvy">Use in DeFi</h2>
              <p className="dmYCHD">
                Use your stTokens across DeFi to get more reward opportunities
                to your daily staked rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
