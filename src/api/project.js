import { endPoint } from "./endpoint";
import { getRequest } from "./service";

export const getMarket = async () => {
    const response = await getRequest(endPoint.market);
    return response;
};

export const getMyCards = async () => {
    const response = await getRequest(endPoint.mycards);
    return response;
};

export const getBudget = async () => {
    const response = await getRequest(endPoint.budget);
    return response;
};

export const getPlayerDetails = async (id) => {
    const response = await getRequest(endPoint.cards, id);
    return response;
};
