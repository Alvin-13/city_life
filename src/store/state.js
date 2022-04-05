let cityInfo = {
  cityId: "0",
  cityName: "全部",
  field: "all"
}

try {
  if(localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.cityInfo);
  }
} catch (error) {
  console.error(error);
}

export default cityInfo;