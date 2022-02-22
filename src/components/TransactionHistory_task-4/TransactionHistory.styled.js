import styled from '@emotion/styled';

export const TransactionContainer = styled.table`
  width: 400px;
  margin: 20px;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;
export const TableHeaderBox = styled.thead`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background-color: teal;
`;

export const TableHeaderName = styled.th`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.8;
  color: white;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  font-size: 12px;
  line-height: 1.8;
  text-transform: capitalize;
  color: grey;
  text-align: center;
`;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background-color: grey;
    color: white;
  }
`;
