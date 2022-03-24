import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils";

export const authServices = {
  login,
};

function login(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "POST",
    extraHeaders,
    JSON.stringify(data)
  );
  return fetch(`${apiEndPoint.LOGIN}`, requestOptions).then((response) =>
    response.json()
  );
}
