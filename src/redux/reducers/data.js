import * as constants from "../constants";

const initialState = {
    marketData: [],
    myCardsData: [],
    budgetData: {},
    playerDetailsData: {},
    filteredMarketData: [],
    filteredMyCardsData: [],
};

const dataReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.GET_MARKET_DATA: {
            return { ...state, marketData: action.payload };
        }
        case constants.GET_MYCARDS_DATA: {
            return { ...state, myCardsData: action.payload };
        }
        case constants.GET_BUDGET_DATA: {
            return { ...state, budgetData: action.payload };
        }
        case constants.GET_PLAYER_DETAILS_DATA: {
            return { ...state, playerDetailsData: action.payload };
        }
        case constants.SORT_MARKET_DATA: {
            return { ...state, marketData: action.payload };
        }
        case constants.FILTER_MARKET_DATA: {
            return { ...state, filteredMarketData: action.payload };
        }
        case constants.FILTER_MYCARDS_DATA: {
            return { ...state, filteredMyCardsData: action.payload };
        }
         case constants.BUY_CARD: {
            return { ...state, myCardsData: [...state.myCardsData, action.payload] };
        }
        case constants.SELL_CARD: {
            return { ...state, marketData: [...state.marketData, action.payload] };
        }
        case constants.UPDATE_BUDGET: {
            return { ...state, budgetData: action.payload };
        }
        default: {
            return state;
        }
    };
};

export { dataReducer };