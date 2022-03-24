import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../../_uttils";

export const dashboardServices = {
  getDashboardData,
  getPreLoginDashboardData
};

function getDashboardData(data) {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.DASHBOARD}`, requestOptions).then((response) =>
    response.json()
  );
}


function getPreLoginDashboardData() {
  const extraHeaders = {
    "Content-Type": "application/json",
  };
  const requestOptions = commonFunctions.getRequestOptions(
    "GET",
    extraHeaders,
    null
  );
  return fetch(`${apiEndPoint.GETPRELOGINDASHBOARDDATA}`, requestOptions).then((response) =>
    response.json()
  );
}
