import React from 'react';
import { useData } from '../contexts/DataContext';
import { useTranslation } from "react-i18next";
import Background from '../components/shared/Background';
import Button from '../components/shared/Button';
import styled from 'styled-components';
import Card from '../components/shared/Card';
import Offset from '../components/shared/Offset';
import * as c from '../components/shared/Card';
import * as s from '../setup/styles/globalStyles';

const Section = styled(s.Section)`
  grid-template-rows: 1fr 4fr 64px;
  position: relative;
  padding: 0em 2em 0em 2em;

  @media (max-width: 480px) {
    padding: 0em 1em 0em 1em;
  }
`;

const Instructions = () => {
  const { t } = useTranslation();

  return (
    <Section id="instructions">
      <Offset />

      <div>
        <s.Title>
          {t("instruction.title")}
        </s.Title>

        <CardsGrid />
      </div>
      
      <Offset />

      <Background
        art={"/config/images/h-art.png"}
      />
    </Section>
  )
}

const CardsGrid = () => {
  const { steps } = useData();

  return (
    <c.Cards>
      {steps.map((step) => {
        let body = <>
          {step.body}
        </>

        let action = <>
          {step.actionText !== "" ?
            <Button
              isFullWidth={true}
              background='#00000033'
              color='#fff'
              icon={step.icon}
              link={step.actionLink}
              text={step.actionText}
            />
            :
            <></>
          }
        </>

        return (
          <Card
            key={step.id}
            number={`Step ${step.id}`}
            title={step.title}
            bodyContent={body}
            actionContent={action}
          />
        )
      })}
    </c.Cards>
  )
}

export default Instructions;