import gql from 'graphql-tag';

export const QUICKSWAP_PRICE_USD = gql`
{
  token(id: "0x01c4c105076bdb01ba329543ff99c85f4097a9c9") {
    tokenDayData(orderBy: date, orderDirection: desc, first: 1) {
      priceUSD
    }
  }
}`
