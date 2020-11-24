import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ebebeb;
  align-items: center;
  padding-top: ${`${statusBarHeight}px`};
`;

export const Content = styled.View`
  padding: 32px 0;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.Image`
  margin-bottom: 32px;
`;

export const NewOrderContainer = styled.View`
  background: #ebebeb;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  padding: 0 16px;
  justify-content: center;
`;
