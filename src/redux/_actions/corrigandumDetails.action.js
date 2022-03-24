import { alert } from "../../_uttils";
import { status } from "../_constants/commonDS";
import { corrigendumDetailService } from "../_services";

export const corrigendumActions = {
    corrigendumDetail,
    searchCorrigendums
};

function corrigendumDetail(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                data: {
                    corrigendom_detail_status: status.IN_PROGRESS,
                    corrigendom_detail_data: null,
                },
            })
        );
        corrigendumDetailService.corrigendumDetail().then(
            (response) => {
                if (response.code == 200) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                corrigendom_detail_status: status.SUCCESS,
                                corrigendom_detail_data: response.object,
                            },
                        })
                    );
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                corrigendom_detail_status: status.FAILURE,
                                corrigendom_detail_data: response,
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
                            corrigendom_detail_status: status.FAILURE,
                            corrigendom_detail_data: error.message,
                        },
                    })
                );
                alert.error(error.message);
            }
        );
    };
}
function searchCorrigendums(data) {
    return (dispatch) => {
        dispatch(
            dispatchFunction({
                type: status.IN_PROGRESS,
                            data: {
                                corrigendum_status: status.IN_PROGRESS,
                                corrigendum_data:null,
                            },
            })
        );
        corrigendumDetailService.searchCorrigendums(data).then(
            (response) => {
                if (response.code == 200) {
                    dispatch(
                        dispatchFunction({
                            type: status.SUCCESS,
                            data: {
                                corrigendum_status: status.SUCCESS,
                                corrigendum_data: response.object,
                            },
                        })
                    );
                } else {
                    dispatch(
                        dispatchFunction({
                            type: status.FAILURE,
                            data: {
                                corrigendum_status: status.FAILURE,
                                corrigendum_data: response,
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
                                corrigendum_status: status.FAILURE,
                                corrigendum_data: error.message,
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
