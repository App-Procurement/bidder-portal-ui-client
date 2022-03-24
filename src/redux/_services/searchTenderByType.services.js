import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils";

export const searchTenderByType = {
  searchTender,
  tenderCriteria
};

function searchTender(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "POST",
    extraHeaders,
    JSON.stringify(data.inputs)
  );
  return fetch(
    `${apiEndPoint.SEARCHTENDERBYTYPE}/${data.type}`,
    requestOptions
  ).then((response) => response.json());
}

function tenderCriteria(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.TENDERCRITERIA}`, requestOptions).then((response) =>
    response.json()
  );
}