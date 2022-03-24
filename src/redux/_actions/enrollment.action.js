import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { enrollmentServices } from "../_services";
export const enrollmentActions = {
  enrollmentBidder,
};
function enrollmentBidder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          enrollment_status: status.IN_PROGRESS,
          enrollment_data: null,
        },
      })
    );
    enrollmentServices.bidderEnrollment(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                enrollment_status: status.SUCCESS,
                enrollment_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                enrollment_status: status.FAILURE,
                enrollment_data: response,
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
              enrollment_status: status.FAILURE,
              enrollment_data: error.message,
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
