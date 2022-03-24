import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { searchTenders } from "../_services";
export const searchTenderTypes = {
  searchTenderType,
};
function searchTenderType(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          tender_type_status: status.IN_PROGRESS,
          tender_type_data: null,
        },
      })
    );
    searchTenders.searchTender().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                tender_type_status: status.SUCCESS,
                tender_type_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                tender_type_status: status.FAILURE,
                tender_type_data: response,
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
              tender_type_status: status.FAILURE,
              tender_type_data: error.message,
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
