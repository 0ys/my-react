import React, { useState } from "react";
import styled from "styled-components";
import MapComponent from "./MapComponent";

const Container = styled.div`
  font-family: Arial, sans-serif;
  height: 100vh; /* 뷰포트를 꽉 채우도록 설정 */
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
`;

const MapSection = styled.div`
  position: relative;
  height: calc(100vh - 400px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isExpanded", // isExpanded를 DOM으로 전달하지 않음
})`
  padding: 16px;
  background-color: #ccc;
  height: 100%;
  position: absolute;
  bottom: ${(props) => (props.isExpanded ? "-100px" : "-600px")};
  left: 0;
  right: 0;
  transition: bottom 0.3s ease;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const SlideBar = styled.div`
  width: 50px;
  height: 5px;
  background-color: black;
  border-radius: 2.5px;
  margin: 10px auto;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
`;

const TagText = styled.span`
  font-size: 14px;
  color: #555;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

const BeachImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
`;

const MapCurationPlaces = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBox = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      {/* Map Section */}
      <MapSection>
        <MapComponent />
      </MapSection>

      {/* Content Section */}
      <ContentSection isExpanded={isExpanded}>
        <SlideBar onClick={toggleBox} />
        <Title>석병1리 방파제</Title>
        <TagContainer>
          <Tag>갯마을 차차차</Tag>
          <TagText>드라마</TagText>
        </TagContainer>
        <Description>신민아가 김선호에게 사랑 고백했던 방파제</Description>
        <BeachImage src="/path-to-beach-image.jpg" alt="Beach Scene" />
      </ContentSection>
    </Container>
  );
};

export default MapCurationPlaces;
