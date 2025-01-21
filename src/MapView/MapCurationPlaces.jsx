import React, { useState } from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";
import ListItem from "./ListItem";
import dummyData from "./dummyData";
import FilterButtons from "./FilterButtons";

const MapCurationPlaces = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [places, setPlaces] = useState(dummyData);

  const toggleBox = () => {
    setIsExpanded(!isExpanded);
  };

  const filters = ["식당", "카페", "관광지", "상점", "숙박"];

  const handleFilterChange = (filter) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  return (
    <Container>
      {/* Map Section */}
      <MapSection>
        <MapComponent />
      </MapSection>

      {/* Content Section */}
      <ContentSection $isExpanded={isExpanded}>
        <SlideBar onClick={toggleBox} />
        <FilterButtons
          filters={filters}
          activeFilter={activeFilter} // 현재 선택된 필터 전달
          onFilterChange={handleFilterChange} // 선택 상태 변경 함수 전달
        />
        <div>
          {places.map((place) => (
            <ListItem key={place.placeId} {...place} />
          ))}
        </div>
      </ContentSection>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MapSection = styled.div`
  position: relative;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled.div`
  padding: 16px;
  background-color: #ffffff;
  height: 100%;
  position: absolute;
  bottom: ${(props) => (props.$isExpanded ? "-100px" : "-500px")};
  left: 0;
  right: 0;
  transition: bottom 0.3s ease;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 1001;
`;

const SlideBar = styled.div`
  width: 60px;
  height: 3px;
  background-color: #cbcbcb;
  border-radius: 2.5px;
  margin: 10px auto;
  cursor: pointer;
`;

export default MapCurationPlaces;
