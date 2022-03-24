import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils";

export const advancedSearchServices = {
  sendSearchTenderData,
};

function sendSearchTenderData(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "POST",
    extraHeaders,
    JSON.stringify(data)
  );
  return fetch(`${apiEndPoint.SEARCHTENDER}`, requestOptions).then((response) =>
    response.json()
  );
}
