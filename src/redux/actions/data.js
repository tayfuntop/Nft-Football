import * as constants from '../constants';
import * as getRequests from '../../api/project';

export const getMarketData = () => async (dispatch) => {

    const { data, success } = await getRequests.getMarket();

    if (success) {
        dispatch({ type: constants.GET_MARKET_DATA, payload: data });
    };
};

export const getMyCardsData = () => async (dispatch) => {

    const { data, success } = await getRequests.getMyCards();

    if (success) {
        dispatch({ type: constants.GET_MYCARDS_DATA, payload: data });
    };
};

export const getBudgetData = () => async (dispatch) => {

    const { data, success } = await getRequests.getBudget();

    if (success) {
        dispatch({ type: constants.GET_BUDGET_DATA, payload: data });
    };
};

export const getPlayerDetailsData = (id) => async (dispatch) => {

    const { data, success } = await getRequests.getPlayerDetails(id);

    if (success) {
        dispatch({ type: constants.GET_PLAYER_DETAILS_DATA, payload: data });
    };
};

export const buyCard = (id) => (dispatch, state) => {

    const { marketData, budgetData } = state().dataReducer;

    const card = marketData.find(card => card.id === id);

    const newBudget = budgetData.budget - card.price;

    dispatch({ type: constants.BUY_CARD, payload: card });

    dispatch({ type: constants.UPDATE_BUDGET, payload: { budget: newBudget } });

    dispatch({ type: constants.GET_MARKET_DATA, payload: marketData.filter(card => card.id !== id) });

};

export const sellCard = (id) => (dispatch, state) => {

    const { marketData, myCardsData, budgetData } = state().dataReducer;

    const card = myCardsData.find(card => card.id === id);

    const newBudget = budgetData.budget + card.price;

    dispatch({ type: constants.SELL_CARD, payload: id });

    dispatch({ type: constants.UPDATE_BUDGET, payload: { budget: newBudget } });

    dispatch({ type: constants.GET_MARKET_DATA, payload: [...marketData, card] });

    dispatch({ type: constants.GET_MYCARDS_DATA, payload: myCardsData.filter(card => card.id !== id) });

};

export const sortMarketData = () => (dispatch, state) => {

    const { marketData } = state().dataReducer;

    const sortedData = marketData.sort((a, b) => a.id - b.id);

    dispatch({ type: constants.SORT_MARKET_DATA, payload: sortedData });

};

export const filterTypeMarketData = (type) => (dispatch, state) => {

    const { marketData } = state().dataReducer;

    const filteredMarketData = marketData.filter(data =>
        (type.cardType.gold && data.cardType === "Gold") ||
        (type.cardType.silver && data.cardType === "Silver") ||
        (type.cardType.bronze && data.cardType === "Bronze") ||
        ((!type.cardType.bronze && !type.cardType.silver && !type.cardType.gold) ===
            (data.cardType === "Gold" || data.cardType === "Silver" || data.cardType === "Bronze"))
    ).filter(data =>
    (((type.position.forward && data.position === "Forward") ||
        (type.position.midfielder && data.position === "Midfielder") ||
        (type.position.defender && data.position === "Defender") ||
        (type.position.goalkeeper && data.position === "Goalkeeper")) ||
        ((!type.position.forward && !type.position.midfielder &&
            !type.position.defender && !type.position.goalkeeper) ===
            (data.position === "Forward" || data.position === "Midfielder" ||
                data.position === "Defender" || data.position === "Goalkeeper")))
    ).filter(data => data.price >= type.price.min && data.price <= type.price.max);

    dispatch({ type: constants.FILTER_MARKET_DATA, payload: filteredMarketData });

};

export const filterTypeMyCardsData = (type) => (dispatch, state) => {

    const { myCardsData } = state().dataReducer;

    const filteredMyCardsData = myCardsData.filter(data =>
        (type.cardType.gold && data.cardType === "Gold") ||
        (type.cardType.silver && data.cardType === "Silver") ||
        (type.cardType.bronze && data.cardType === "Bronze") ||
        ((!type.cardType.bronze && !type.cardType.silver && !type.cardType.gold) ===
            (data.cardType === "Gold" || data.cardType === "Silver" || data.cardType === "Bronze"))
    ).filter(data =>
    (((type.position.forward && data.position === "Forward") ||
        (type.position.midfielder && data.position === "Midfielder") ||
        (type.position.defender && data.position === "Defender") ||
        (type.position.goalkeeper && data.position === "Goalkeeper")) ||
        ((!type.position.forward && !type.position.midfielder &&
            !type.position.defender && !type.position.goalkeeper) ===
            (data.position === "Forward" || data.position === "Midfielder" ||
                data.position === "Defender" || data.position === "Goalkeeper")))
    ).filter(data => data.price >= type.price.min && data.price <= type.price.max);

    dispatch({ type: constants.FILTER_MYCARDS_DATA, payload: filteredMyCardsData });

};