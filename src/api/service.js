import { baseUrl } from "./endpoint";

export const getRequest = (endPoint, target,
    method = "GET",
    headers = { "Content-Type": "application/json" },
) => {

    return new Promise((resolve, reject) => {

        fetch(baseUrl + endPoint + (target === undefined ? "" : target), { headers, method })
            .then(response => convertJson(response))
            .then(data => {
                resolve(data);
            })
            .catch(e => {
                reject(e);
            });
    });
};

const convertJson = async (resp) => {
    const success = resp.status === 200;
    const data = success ? await resp.json() : null;
    return { data, success };
};