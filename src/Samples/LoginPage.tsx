import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {RoundButtonOutline} from '../Buttons';
import {SingleLineInput} from '../Inputs';
import {useColors} from '../Themes';
import {Typography} from '../Typography';
import {Stack} from '../Utils';
import {StaticPage} from '../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    height: '100%',
    justifyContent: 'space-between',
  },
  inputArea: {flex: 1, justifyContent: 'center'},
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  errorMessage: {fontWeight: '600'},
});

type Props = {
  onPressLogin: (params: {email: string; password: string}) => void;
  errorMessage?: string;
};

export const LoginPage: React.FC<Props> = ({onPressLogin, errorMessage}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {warningColor} = useColors();

  const onSubmit = React.useCallback(() => {
    onPressLogin({email, password});
  }, [onPressLogin, email, password]);
  return (
    <StaticPage>
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <Stack space="large">
            <SingleLineInput
              label={'Email'}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              errorMessage={''}
            />
            <SingleLineInput
              label={'Password'}
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              onSubmitEditing={onSubmit}
              errorMessage={''}
            />
          </Stack>
          <Typography style={styles.errorMessage} color={warningColor}>
            {errorMessage}
          </Typography>
        </View>
        <Stack space="xxlarge" style={styles.buttonContainer}>
          <RoundButtonOutline
            onPress={onSubmit}
            disabled={!email || !password}
            label={'Login'}
          />
        </Stack>
      </View>
    </StaticPage>
  );
};
