import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { authServices } from "./../_services";

export const authAction = {
  login,
};

function login(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          login_status: status.IN_PROGRESS,
          login_data: null,
        },
      })
    );
    authServices.login(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                login_status: status.SUCCESS,
                login_data: response.object,
              },
            })
          );
          alert.success(response.message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                login_status: status.FAILURE,
                login_data: response,
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
              login_status: status.FAILURE,
              login_data: error.message,
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
