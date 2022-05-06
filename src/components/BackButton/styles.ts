import { Pressable } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonPressable = styled(Pressable)`
  align-items: center;
  justify-content: center;
  margin-left: 18px;
`;

export const BackButtonIcon = styled(Icon).attrs({
  size: RFValue(10),
  name: 'left',
  color: '#85868A',
})``;
