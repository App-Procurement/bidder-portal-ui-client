import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { advancedSearchServices, searchTenderByType } from "../_services";
export const advancedSearch = {
  AdvancedSearchTender,
  tenderCriteria
};
function AdvancedSearchTender(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          search_status: status.IN_PROGRESS,
          search_data: null,
        },
      })
    );
    advancedSearchServices.sendSearchTenderData(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                search_status: status.SUCCESS,
                search_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                search_status: status.FAILURE,
                search_data: response,
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
              search_status: status.FAILURE,
              search_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function tenderCriteria(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tender_criteria_status: status.IN_PROGRESS,
          tender_criteria_data: null,
        },
      })
    );
    searchTenderByType.tenderCriteria().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tender_criteria_status: status.SUCCESS,
                tender_criteria_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tender_criteria_status: status.FAILURE,
                tender_criteria_data: response,
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
              tender_criteria_status: status.FAILURE,
              tender_criteria_data: error.message,
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
