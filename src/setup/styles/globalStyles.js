import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Page = styled.div`
  position: relative;
  width: 100%;
`;

export const Title= styled.div`
  font-size: 1.6em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`;

export const Footer = styled.footer`
  display: flex;
  font-weight: 400;
  justify-content: center;
  opacity: 0.4;
  font-size: 0.8em;
  font-weight: 300;
  padding-top: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
