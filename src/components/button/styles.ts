import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  /* position: absolute; */
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  border-radius: 15;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 240;
  width: auto;
  height: 60;
  padding-left: 15px;
  margin-top: 20;
  margin-bottom: 20;
`;
