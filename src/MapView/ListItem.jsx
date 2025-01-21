import React from "react";
import styled from "styled-components";

const ListItem = ({ name, type, address, phone, openHours, breakTime, closedDays, placeImage }) => {
  return (
    <ItemContainer>
      <TitleRow>
        <Title>{name}</Title>
      </TitleRow>
      <Subtitle>{type}</Subtitle>
      <InfoRow>
        <InfoItem $icon="📍">{address}</InfoItem>
        <InfoItem $icon="📞">{phone}</InfoItem>
        <InfoItem $icon="⏰">{openHours}</InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem $icon="🍴">브레이크타임: {breakTime}</InfoItem>
        <InfoItem $icon="❌">휴무일: {closedDays}</InfoItem>
      </InfoRow>
      <Image src={placeImage} alt={name} />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 4px 0 8px;
  font-size: 14px;
  color: #666;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #888;
`;

const InfoItem = styled.span`
  display: flex;
  align-items: center;

  &::before {
    content: ${(props) => `'${props.$icon}'`};
    margin-right: 4px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 8px;
`;

export default ListItem;
