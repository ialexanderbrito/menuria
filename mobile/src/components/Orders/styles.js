import styled, { css } from 'styled-components/native';

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 120,
    paddingHorizontal: 16,
  },
}))`
  width: 100%;
`;

const cardStatusVariants = {
  PREPARING: css`
    background: #f6a609;
  `,
  DONE: css`
    background: #2ac769;
  `,
};

const cardTextStatusVariants = {
  PREPARING: css`
    color: #fff;
  `,
  DONE: css`
    color: #fff;
  `,
};

export const Card = styled.View`
  background: #fff;
  flex-direction: row;
  height: 70px;
  margin-bottom: 16px;
  border-radius: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  ${({ status }) => cardStatusVariants[status] || null}
`;

export const TableNumber = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 18px;
  ${({ status }) => cardTextStatusVariants[status] || null}
`;

export const Status = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 14px;
  ${({ status }) => cardTextStatusVariants[status] || null}
`;

export const Description = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 14px;
  ${({ status }) => cardTextStatusVariants[status] || null}
`;
