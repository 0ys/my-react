import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// 맵 옵션 설정
const mapOptions = {
  disableDefaultUI: true,
  mapId: "961218733baff794",
};

const MapComponent = () => {
  const [center, setCenter] = useState(null); // null로 초기화
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude }); // 사용자 위치로 중심 업데이트

          if (mapInstance) {
            const markerElement = new google.maps.marker.AdvancedMarkerElement({
              position: { lat: latitude, lng: longitude },
              map: mapInstance,
            });

            // HTML 커스텀 마커
            markerElement.content = document.createElement("div");
            markerElement.content.style.cssText = `
                background-color: #007bff;
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 14px;
                text-align: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              `;
            markerElement.content.innerText = "현재 위치";
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
          setCenter({ lat: 37.5665, lng: 126.978 }); // 기본값: 서울 좌표
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCenter({ lat: 37.5665, lng: 126.978 }); // 기본값: 서울 좌표
    }
  }, [mapInstance]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDrrCr3mkJBH3wmEqoJk3MVMfN74gbR3_I"
      libraries={["marker"]}
      version="beta"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center || { lat: 37.5665, lng: 126.978 }} // center가 null일 경우 기본값 사용
        zoom={14}
        options={mapOptions}
        onLoad={(map) => setMapInstance(map)} // 지도 로드 후 인스턴스 저장
      />
    </LoadScript>
  );
};

export default MapComponent;
