import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  width: 320px;
  margin: 20px;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const StatisticsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  text-align: center;
  margin: 0;
  padding-inline-start: 0;
  border-bottom-radius: 4px;
  > li {
    list-style-type: none;
    flex-basis: 20%;
    width: 20px;
    border-top: 2px #e0e0e0 solid;

    :nth-of-type(n + 1) {
      border-right: 0px;
      color: white;
    }
    :last-child {
      border-right: 0px;
    }
    :nth-of-type(1) {
      background-color: #99ccff;
    }
    :nth-of-type(2) {
      background-color: #cc99ff;
    }
    :nth-of-type(3) {
      background-color: #ff99ff;
    }
    :nth-of-type(4) {
      background-color: #99ff99;
    }
    :nth-of-type(5) {
      background-color: #ff9999;
    }
  }
`;

export const StatListLable = styled.span`
  color: white;
  font-size: 12px;
`;

export const StatListPercentage = styled.span`
  display: block;
  font-size: 18px;
`;
