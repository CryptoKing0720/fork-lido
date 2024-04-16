import { Section } from '@lidofinance/lido-ui';

export default function ComingSoon() {
  return (
    <Section id="stake" className="sc-da4a75d8-0 azLgY">
      <div className="sc-68c49950-0 edHimf">
        <div className="sc-68c49950-3 gerrOV">
          <img
            src="/static/images/comingSoon/logo-color.svg"
            alt=""
            className="sc-68c49950-5 sc-68c49950-6 girTGK gUCOTK"
            data-xblocker="passed"
            style={{ visibility: 'visible' }}
          />
          <div className="sc-ea212a8d-0 jPEekX sc-da4a75d8-1 cqETte">
            <div id="stake-form-subscribe" className="sc-da4a75d8-2 PHmpe">
              <h2 className="sc-da4a75d8-3 dSwkCR">
                Liquidity for staked tokens
              </h2>
              <p className="sc-da4a75d8-4 eFgtKC">
                Simplified participation in staking
              </p>
              <a
                href="#networks"
                style={{ width: '260', height: '64' }}
                className="ktbhjQ fkQGve"
              >
                Stake now
                {/* <Ripple /> */}
              </a>
            </div>
          </div>
          <div className="sc-ea212a8d-0 jPEekX sc-da4a75d8-6 fyyaXM">
            {/* <InfoField data={`$${staked}`} label="Total staked tokens" />
            <InfoField data={`$${rewards}`} label="Total rewards paid" />
            <InfoField data={`${stakers}`} label="Stakers" /> */}
          </div>
          <div className="sc-ea212a8d-0 jPEekX sc-68c49950-2 bRyvnZ">
            <img
              src="/static/images/index/stake/sun.svg"
              alt=""
              className="sc-68c49950-4 bFfDLD"
              data-xblocker="passed"
              style={{ visibility: 'visible' }}
            />
            <img
              src="/static/images/comingSoon/logo-color.svg"
              alt=""
              className="sc-68c49950-5 girTGK"
              data-xblocker="passed"
              style={{ visibility: 'visible' }}
            />
          </div>
        </div>
        <div className="sc-68c49950-1 dfEdLG">
          <div className="sc-ea212a8d-0 jPEekX sc-68c49950-2 bRyvnZ">
            <img
              src="/static/images/index/stake/shadow.svg"
              alt=""
              className="sc-68c49950-7 fhbXCJ"
              data-xblocker="passed"
              style={{ visibility: 'visible' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
