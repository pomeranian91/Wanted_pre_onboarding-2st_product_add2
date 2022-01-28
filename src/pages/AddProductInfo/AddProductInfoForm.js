import React, { useState } from 'react';
import styled from 'styled-components';
import ContentForm from './ContentForm';
import SetDefaultContainerInfo from './SetDefaultContainerInfo/SetDefaultContainerInfo';

const AddProductInfoForm = ({ header, categories }) => {
  const [imgArray, setImgArray] = useState([]);

  return (
    <Container>
      <Header>{header}</Header>
      {categories.length === 0 ? (
        <ContentContainer>
          <SetDefaultContainerInfo header={header} />
        </ContentContainer>
      ) : (
        categories.map((category, index) => {
          return (
            <ContentContainer key={index}>
              <CategoryContainer>{category}</CategoryContainer>
              <ContentForm header={header} category={category} />
            </ContentContainer>
          );
        })
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #cecece;
  margin-bottom: 100px;
`;

const Header = styled.header`
  font-size: 18px;
  font-weight: 600;
  padding: 20px 20px;
  border-bottom: 1px solid #cecece;
`;

const ContentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #cecece;

  &:last-child {
    border-bottom: none;
  }
`;

const CategoryContainer = styled.div`
  min-width: 150px;
  max-width: 150px;
  font-size: 18px;
  padding: 25px 20px;
  background-color: #f3efef;
  border-right: 2px solid #cecece;
`;

export default AddProductInfoForm;
