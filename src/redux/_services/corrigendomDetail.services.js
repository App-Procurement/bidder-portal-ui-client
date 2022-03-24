import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils/commonFunction";

export const corrigendumDetailService = {
    corrigendumDetail,
    searchCorrigendums
}

function corrigendumDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.CORRIGENDOM}`, requestOptions).then((response) =>
        response.json()
    );
}

function searchCorrigendums(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "POST",
        extraHeaders,
       JSON.stringify(data)
    );
    return fetch(`${apiEndPoint.SEARCHCORRIGENDUMS}`, requestOptions).then((response) =>
        response.json()
    );
}

