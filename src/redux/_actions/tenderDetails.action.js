import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { tenderDetailService } from "../_services";

export const tenderdetailsActions = {
  tenderDetail,
  tenderList,
  corrigendumTendersList,
  tendersList,
  locationTendersList,
  tenderDetails,
};

function tenderDetail() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tender_detail_status: status.IN_PROGRESS,
          tender_detail_data: null,
        },
      })
    );
    tenderDetailService.getTenderDetail().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tender_detail_status: status.SUCCESS,
                tender_detail_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tender_detail_status: status.FAILURE,
                tender_detail_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              tender_detail_status: status.FAILURE,
              tender_detail_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function tenderList() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tender_list_status: status.IN_PROGRESS,
          tender_list_data: null,
        },
      })
    );
    tenderDetailService.tenderList().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tender_list_status: status.SUCCESS,
                tender_list_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tender_list_status: status.FAILURE,
                tender_list_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              tender_list_status: status.FAILURE,
              tender_list_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function corrigendumTendersList() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          corrigendum_list_status: status.IN_PROGRESS,
          corrigendum_list_data: null,
        },
      })
    );
    tenderDetailService.corrigendumList().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                corrigendum_list_status: status.SUCCESS,
                corrigendum_list_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                corrigendum_list_status: status.FAILURE,
                corrigendum_list_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              corrigendum_list_status: status.FAILURE,
              corrigendum_list_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function tendersList() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tenders_list_status: status.IN_PROGRESS,
          tenders_list_data: null,
        },
      })
    );
    tenderDetailService.tendersList().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tenders_list_status: status.SUCCESS,
                tenders_list_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tenders_list_status: status.FAILURE,
                tenders_list_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              tenders_list_status: status.FAILURE,
              tenders_list_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function locationTendersList() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          location_list_status: status.IN_PROGRESS,
          location_list_data: null,
        },
      })
    );
    tenderDetailService.locationList().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                location_list_status: status.SUCCESS,
                location_list_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                location_list_status: status.FAILURE,
                location_list_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              location_list_status: status.FAILURE,
              location_list_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function tenderDetails(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tender_details_status: status.IN_PROGRESS,
          tender_details_data: null,
        },
      })
    );
    tenderDetailService.tenderDetails(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tender_details_status: status.SUCCESS,
                tender_details_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tender_details_status: status.FAILURE,
                tender_details_data: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              tender_details_status: status.FAILURE,
              tender_details_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function dispatchFunction(data) {
  return {
    type: data.type,
    data: data.data,
  };
}
