import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils/commonFunction";

export const enrollmentServices = {
  bidderEnrollment,
};

function bidderEnrollment(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "POST",
    extraHeaders,
    JSON.stringify(data)
  );
  return fetch(
    `${apiEndPoint.ENROLLMENT}/${data.loginId}`,
    requestOptions
  ).then((response) => response.json());
}
