$(function() {
  // 获取用户的经纬度
  const getLocation = (success, error) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      error("浏览器不支持获取定位");
    }
  };

  $("#getDis").on("click", () => {
    getLocation(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const myLocation = new qq.maps.LatLng(latitude, longitude);
        const someTarget = new qq.maps.LatLng(120.76644, 30.759725);
        alert(latitude + ";" + longitude);
        console.log(
          Math.round(
            qq.maps.geometry.spherical.computeDistanceBetween(
              myLocation,
              someTarget
            ) * 10
          ) / 10
        );
      },
      (err) => {
        alert(err)
      }
    );
  });
});
