export default {
  setCityInfo(state, cityInfo) {
    state.cityId = cityInfo.cityId;
    state.cityName = cityInfo.cityName;

    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {}
  },
  setField(state, field) {
    state.field = field;
    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {}
  }
};
