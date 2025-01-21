import React from "react";
import styled from "styled-components";

const FilterButtons = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <ButtonGroup>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          $active={activeFilter === filter ? true : false} // 현재 활성화된 필터 확인
          onClick={() => onFilterChange(filter)} // 클릭 이벤트 핸들링
        >
          {filter}
        </FilterButton>
      ))}
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background-color: #f9f9f9;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#fff" : "#007bff")};
  background-color: ${(props) => (props.$active ? "#007bff" : "#f0f0f0")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.$active ? "#0056b3" : "#e0e0e0")};
  }
`;

export default FilterButtons;
