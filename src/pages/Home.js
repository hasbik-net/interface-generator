import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useQuickSwap } from '../contexts/QuickSwapContext';
import { stringToCurrency } from '../helpers/Formatters';
import styled from 'styled-components';
import Button from '../components/shared/Button';
import LanguagePicker from './../components/LanguagePicker';

import * as s from '../setup/styles/globalStyles';

const Section = styled(s.Section)`
  grid-template-rows: 1fr 64px 9fr;
  position: relative;
  padding: 0.5em 2em 0em 2em;

  @media (max-width: 480px) {
    padding: 0.5em 0.5em 0em 0.5em;
  }
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 2em;

  @media (max-width: 850px) {
    justify-content: left;
    grid-template-columns: 1fr 1fr;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Logo = styled.div`
  
`;

const Name = styled.div`
  font-size: 2.4em;
  margin-bottom: 0.1em;
`;

const Price = styled.div`
  margin-right: 12px;
`;

const SubHeaderLeft = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.8;
  font-size: 0.8em;
  padding-top: 8px;
  color: var(--green);

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const SubHeaderRight = styled.div`
  display: flex;
  font-weight: 400;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
  font-size: 0.8em;
  font-weight: 300;
  padding-top: 8px;

  @media (max-width: 480px) {
    padding-top: 16px;
    justify-content: center;
  }
`;

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Slogan = styled.div`
  opacity: 0.6;
  text-align: justify;
  font-weight: 300;
  margin-bottom: 2em;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media (max-width: 850px) {
    display: none;
  }
`;

const MainLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const Home = () => {
  const { t } = useTranslation();
  const { getHasbikPrice } = useQuickSwap();
  const [price, setPrice] = useState();

  useEffect(() => {
    (async () => {
      let _price = await getHasbikPrice();

      setPrice(stringToCurrency(_price));
    })()
  }, [])

  const copyToClipboard = (e) => {
    e.preventDefault();

    let text = "0x01c4c105076bdb01ba329543ff99c85f4097a9c9";

    try {
      navigator.clipboard.writeText(text);
      console.log(text);
    } catch (error) {
      console.log("Failed to copy");
    }
  }

  return (
    <Section>
      <Header />

      <s.Row>
        <s.Column>
          <SubHeaderLeft>
            {price === undefined ?
              <img
                src={"/config/images/loading.svg"}
                height={16}
                width={16}
              />
              :
              <Price>
                {price}
              </Price>
            }

            <Button
              background='transparent'
              icon={'/config/images/quickswap.png'}
              icon2={'/config/images/polygon-round.svg'}
              iconSize='16px'
              link={'https://info.quickswap.exchange/#/pair/0xf4fa96c470814e3e321cec3fbf28f4e05e5edb4e'}
              text={"HAS-WMATIC"}
            />
          </SubHeaderLeft>
        </s.Column>

        <s.Column>
          <SubHeaderRight onClick={copyToClipboard}>
            {"0x01c4c105076bdb01ba329543ff99c85f4097a9c9"}

            <img
              src={"/config/images/copy.svg"}
              height={16}
              width={16}
              style={{
                marginLeft: '0.5em',
                cursor: 'pointer'
              }}
            />
          </SubHeaderRight>
        </s.Column>
      </s.Row>

      <TextContainer>
        <s.Title>
          {t("intro.question")}
        </s.Title>
        <Slogan>
          {t("intro.slogan")}
        </Slogan>
        <Buttons />
      </TextContainer>
    </Section >
  )
}

const Buttons = () => {
  const { t } = useTranslation();

  return (
    <ButtonsContainer>
      <Button
        background='var(--accent)'
        color='var(--accent-text)'
        link={'#instructions'}
        text={t("intro.buy-has")}
        isAnchor={true}
      />
      <Button
        background='transparent'
        color='#5865f2'
        icon={'/config/images/discord-purple.svg'}
        link={'https://discord.gg/VC54YrS5S2'}
        text={t("intro.discord-join")}
      />
    </ButtonsContainer>
  )
}

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContent>
      <LogoWrapper>
        <Logo>
          <img
            src={"/config/images/h-art.png"}
            height={"64em"}
            width={"64em"}
          />
        </Logo>

        <Name>
          {"HASBIK"}
        </Name>
      </LogoWrapper>

      <Navigation>
        <MainLink href="https://quickswap.exchange/#/swap?outputCurrency=0x01c4c105076bdb01ba329543ff99c85f4097a9c9">{t("intro.navigation.links.1")}</MainLink>
        <Link href="#roadmap">{t("intro.navigation.links.2")}</Link>
        <Link href="#distribution">{t("intro.navigation.links.3")}</Link>
      </Navigation>

      <LanguageWrapper>
        <LanguagePicker />
      </LanguageWrapper>
    </HeaderContent>
  )
}

export default Home;