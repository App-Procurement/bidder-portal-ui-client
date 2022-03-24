import config from "../../config";

export const apiEndPoint = {
  DASHBOARD: `${config.apiUrl}/dashboard`,
  TENDERDETAIL: `${config.apiUrl}/tenderDetail`,
  SEARCHTENDER: `${config.apiUrl}/searchTender`,
  CORRIGENDOM: `${config.apiUrl}/corrigendumDetail`,
  SEARCHTENDERBYTYPE: `${config.apiUrl}/searchTender`,
  ENROLLMENT: `${config.apiUrl}/enrollment`,
  TENDERTYPE: `${config.apiUrl}/alltenders`,
  TENDERLIST: `${config.apiUrl}/tenderlist`,
  TENDERSLIST: `${config.apiUrl}/tenderslist`,
  LOCATIONLIST: `${config.apiUrl}/locationlist`,
  CORRIGENDOMLIST: `${config.apiUrl}/corrigendumlist`,
  TENDERCRITERIA: `${config.apiUrl}/tendercriteria`,
  TENDERDETAILS: `${config.apiUrl}/tenderDetails`,
  LOGIN: `${config.apiUrl}/login`,
  SEARCHCORRIGENDUMS: `${config.apiUrl}/searchCorrigendums`,
  GETPRELOGINDASHBOARDDATA: `${config.apiUrl}/prelogindashboard`,

};
