import * as constants from "../constants";

export const openTradeModal = () => {

    return {
        type: constants.OPEN_TRADE_MODAL,
    };
};

export const closeTradeModal = () => {

    return {
        type: constants.CLOSE_TRADE_MODAL,
    };
};

export const openPlayerDetailsModal = () => {

    return {
        type: constants.OPEN_PLAYER_DETAILS_MODAL,
    };
};

export const closePlayerDetailsModal = () => {

    return {
        type: constants.CLOSE_PLAYER_DETAILS_MODAL,
    };
};

export const openNotEnoughtMoneyModal = () => {

    return {
        type: constants.OPEN_NOT_ENOUGHT_MONEY_MODAL,
    };
};

export const closeNotEnoughtMoneyModal = () => {

    return {
        type: constants.CLOSE_NOT_ENOUGHT_MONEY_MODAL,
    };
};
