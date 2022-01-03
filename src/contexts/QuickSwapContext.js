import React, { useContext } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';
import { QUICKSWAP_PRICE_USD } from './queries/QuickSwap'

const QuickSwapContext = React.createContext();

const thegraphClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06',
    cache: new InMemoryCache()
});

export function useQuickSwap() {
    return useContext(QuickSwapContext)
}

export function QuickSwapProvider({ children }) {

    const getQuickSwapPrice = async () => {
        const request = thegraphClient => thegraphClient.query({ query: QUICKSWAP_PRICE_USD });

        let response = await request(thegraphClient);

        if (response.data === undefined) return 0;
        if (response.data.token.tokenDayData[0] === undefined) return 0;

        return response.data.token.tokenDayData[0].priceUSD;
    }

    return (
        <QuickSwapContext.Provider value={{ getQuickSwapPrice }}>
            {children}
        </QuickSwapContext.Provider>
    )
}
