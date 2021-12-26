import React from 'react';
import { useTranslation } from "react-i18next";
import { useData } from '../contexts/DataContext';
import styled from 'styled-components';
import Card from '../components/shared/Card';
import Offset from '../components/shared/Offset';
import * as c from '../components/shared/Card';
import * as s from '../setup/styles/globalStyles';

const Section = styled(s.Section)`
  grid-template-rows: 1fr 9fr;
  padding: 0em 2em 0em 2em;

  @media (max-width: 480px) {
    padding: 0em 1em 0em 1em;
  }
`;

const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <Section id="roadmap">
      <Offset />

      <div>
        <s.Title>
          {t("roadmap.title")}
        </s.Title>

        <CardsGrid />
      </div>
    </Section>
  )
}

const CardsGrid = () => {
  const { phases } = useData();

  const onSocialClick = (e, url) => {
    e.preventDefault();
    window.open(url);
  }

  return (
    <c.Cards>
      {phases.map((phase) => {
        let body = <>
          {phase.description}
          <c.CardItems>
            {phase.steps.map((step) => {
              return (
                <c.CardItem key={step.id}>
                  <c.CardItemTitle opacity={step.isCompleted ? 1 : 0.4}>{step.title}</c.CardItemTitle>
                  <c.CardItemBody>{step.description}</c.CardItemBody>

                  {step.links !== undefined ?
                    <c.CardLinks>
                      {step.links.map((link) => {
                        return (
                          <c.Social
                            key={link.id}
                            src={link.icon}
                            onClick={(e) => { onSocialClick(e, link.url); }}
                          />
                        )
                      })}
                    </c.CardLinks>
                    :
                    <></>
                  }
                </c.CardItem>
              )
            })}
          </c.CardItems>
        </>

        return (
          <Card
            key={phase.id}
            number={phase.deadline}
            title={phase.title}
            bodyContent={body}
            hideBackground={true}
          />
        )
      })}
    </c.Cards>
  )
}

export default Roadmap;