import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 320px;
  margin: 20px;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f2f2f2;
  margin: 32px 0;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const UserTag = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const UserLocation = styled.p`
  color: gray;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const UserStats = styled.ul`
  display: flex;
  text-align: center;
  margin: 0;
  padding-inline-start: 0;

  > li {
    list-style-type: none;
    flex-basis: 35%;
    padding: 20px;
    border-top: 2px #e0e0e0 solid;

    :nth-of-type(n + 1) {
      border-bottom-left-radius: 4px;
      border-right: 2px #e0e0e0 solid;
    }
    :last-child {
      border-right: 0px;
    }
  }
`;

export const UserStatsLable = styled.span`
  color: gray;
  font-size: 14px;
`;

export const UserStatsQuantity = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
`;
