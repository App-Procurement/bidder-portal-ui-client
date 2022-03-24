import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { searchTenderByType } from "../_services";
export const searchTender = {
  searchByTenderType,
};
function searchByTenderType(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          search_tender_by_type_status: status.IN_PROGRESS,
          search_tender_by_type_data: null,
        },
      })
    );
    searchTenderByType.searchTender(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                search_tender_by_type_status: status.SUCCESS,
                search_tender_by_type_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                search_tender_by_type_status: status.FAILURE,
                search_tender_by_type_data: response,
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
              search_tender_by_type_status: status.FAILURE,
              search_tender_by_type_data: error.message,
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
