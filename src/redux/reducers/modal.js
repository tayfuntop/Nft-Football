import * as constants from "../constants";

const initialState = {
    tradeModal: false,
    playerDetailsModal: false,
    notEnoughtMoneyModal: false,
};

const modalReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.OPEN_TRADE_MODAL: {
            return { ...state, tradeModal: true };
        }
        case constants.CLOSE_TRADE_MODAL: {
            return { ...state, tradeModal: false };
        }
        case constants.OPEN_PLAYER_DETAILS_MODAL: {
            return { ...state, playerDetailsModal: true };
        }
        case constants.CLOSE_PLAYER_DETAILS_MODAL: {
            return { ...state, playerDetailsModal: false };
        }
        case constants.OPEN_NOT_ENOUGHT_MONEY_MODAL: {
            return { ...state, notEnoughtMoneyModal: true };
        }
        case constants.CLOSE_NOT_ENOUGHT_MONEY_MODAL: {
            return { ...state, notEnoughtMoneyModal: false };
        }
        default: {
            return state;
        }
    };
};

export { modalReducer };