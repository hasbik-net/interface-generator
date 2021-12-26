import React from 'react';
import { useTranslation } from "react-i18next";
import { useData } from '../contexts/DataContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import Card from '../components/shared/Card';
import Offset from '../components/shared/Offset';
import * as s from '../setup/styles/globalStyles';
import 'react-circular-progressbar/dist/styles.css';

const Section = styled(s.Section)`
  grid-template-rows: 1fr  4fr 64px;
  position: relative;
  padding: 0em 2em 0em 2em;

  @media (max-width: 480px) {
    padding: 0em 1em 0em 1em;
  }
`;

const ProgressBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 1em;
`

const ProgressBar = styled.div`
  text-align: center;
  max-width: 160px;
`;

const Cards = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

const Details = () => {
  const { t } = useTranslation();

  return (
    <Section id="distribution">
      <Offset />

      <div>
        <s.Title>
          {t("details.title")}
        </s.Title>

        <CardsGrid />
      </div>

      <s.Footer>
        {t("details.footer")}
      </s.Footer>
    </Section >
  )
}

const CardsGrid = () => {
  const { wallets } = useData();

  return (
    <Cards>
      {wallets.map((wallet) => {
        let body = <ProgressBarWrapper>
          <ProgressBar key={wallet.id}>
            <CircularProgressbar
              value={wallet.total}
              text={`${wallet.total}%`}
              styles={buildStyles({
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `var(--accent)`,
                textColor: '#fff',
                trailColor: 'var(--primary)'
              })}
            />
          </ProgressBar>
        </ProgressBarWrapper>

        return (
          <Card
            key={wallet.id}
            number={wallet.has}
            title={wallet.title}
            bodyContent={body}
          />
        )
      })}
    </Cards>
  )
}

export default Details;
