import { HTTP } from "utils/http";
import config from "utils/config";

class ListModel extends HTTP {
  getListData(cityId, field) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          cityId,
          field
        },
        success(data) {
          resolve({
            status: 0,
            data
          });
        },
        error(err) {
          resolve({
            status: -1,
            err
          });
        }
      });
    });
  }
}

export { ListModel };
