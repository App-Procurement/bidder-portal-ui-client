import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { dashboardServices } from "../_services";
export const dashboardActions = {
  dashboard,
  getPreLoginDashboardData
};
function dashboard() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          dashboard_status: status.IN_PROGRESS,
          dashboard_data: null,
        },
      })
    );
    dashboardServices.getDashboardData().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                dashboard_status: status.SUCCESS,
                dashboard_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                dashboard_status: status.FAILURE,
                dashboard_data: response,
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
              dashboard_status: status.FAILURE,
              dashboard_data: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function getPreLoginDashboardData() {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_pre_login_dashboard_status: status.IN_PROGRESS,
          get_pre_login_dashboard_data: null,
        },
      })
    );
    dashboardServices.getPreLoginDashboardData().then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_pre_login_dashboard_status: status.SUCCESS,
                get_pre_login_dashboard_data: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_pre_login_dashboard_status: status.FAILURE,
                get_pre_login_dashboard_data: response,
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
              get_pre_login_dashboard_status: status.FAILURE,
              get_pre_login_dashboard_data: error.message,
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
