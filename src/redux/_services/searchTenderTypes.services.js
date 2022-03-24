
import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils";

export const searchTenders = {
  searchTender,
};

function searchTender(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    // JSON.stringify(data.inputs)
  );
  return fetch(
    `${apiEndPoint.TENDERTYPE}`,
    requestOptions
  ).then((response) => response.json());
}