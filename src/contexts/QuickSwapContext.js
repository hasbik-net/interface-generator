import React, { useContext } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';
import { QUICKSWAP_PRICE_USD, QUICKSWAP_ETH_PRICE } from './queries/QuickSwap'

const QuickSwapContext = React.createContext();

const thegraphClient = new ApolloClient({
    uri: 'https://polygon.furadao.org/subgraphs/name/quickswap',
    cache: new InMemoryCache()
});

export function useQuickSwap() {
    return useContext(QuickSwapContext)
}

export function QuickSwapProvider({ children }) {

    const getHasbikPrice = async () => {
        const request = thegraphClient => thegraphClient.query({ query: QUICKSWAP_PRICE_USD });
        let response = await request(thegraphClient);
        
        if (response.data?.token === undefined) return 0;

        let ethPrice = await getETHPrice();
        
        return response.data.token.derivedETH * ethPrice;
    }

    const getETHPrice = async () => {
        const request = thegraphClient => thegraphClient.query({ query: QUICKSWAP_ETH_PRICE });
        let response = await request(thegraphClient);
        
        if (response.data?.bundle === undefined) return 0;

        return response.data.bundle.ethPrice;
    }

    return (
        <QuickSwapContext.Provider value={{ getHasbikPrice }}>
            {children}
        </QuickSwapContext.Provider>
    )
}
