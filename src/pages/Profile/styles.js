import styled from 'styled-components/native';

import Input from '~/components/Input';
import Buttons from '~/components/Buttons';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 19px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const SubmitButton = styled(Buttons)`
  margin-top: 10px;
`;

export const LogoutButton = styled(Buttons)`
  margin-top: 15px;
  background: #f64c75;
`;
