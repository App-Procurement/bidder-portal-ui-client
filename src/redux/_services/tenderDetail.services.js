import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils/commonFunction";

export const tenderDetailService = {
    getTenderDetail, tenderList, locationList, tendersList, corrigendumList,tenderDetails
}

function getTenderDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.TENDERDETAIL}`, requestOptions).then((response) =>
        response.json()
    );
}

function tenderList(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.TENDERLIST}/${data.type}`, requestOptions).then((response) =>
        response.json()
    );
}
function tendersList(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.TENDERSLIST}`, requestOptions).then((response) =>
        response.json()
    );
}

function locationList(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.LOCATIONLIST}`, requestOptions).then((response) =>
        response.json()
    );
}

function corrigendumList(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.CORRIGENDOMLIST}`, requestOptions).then((response) =>
        response.json()
    );
}

function tenderDetails(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOptions(
        "GET",
        extraHeaders,
        null
    );
    return fetch(`${apiEndPoint.TENDERDETAILS}/${data.type}/${data.id}`, requestOptions).then((response) =>
        response.json()
    );
}