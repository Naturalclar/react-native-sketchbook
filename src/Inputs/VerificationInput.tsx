import * as React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useColors} from '../Themes';
import {Typography} from '../Typography';

const truncate = (value: string, length: number) => {
  return value.substring(0, length);
};

const getArray = (value: string, length: number) => {
  const truncatedValue = truncate(value, length);
  return [...truncatedValue.split(''), ...new Array(length).fill('')].slice(
    0,
    length,
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  character: {
    fontSize: 24,
  },
  characterContainer: {
    width: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  input: {
    position: 'absolute',
    opacity: 0,
  },
  label: {
    fontSize: 14,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  focused: {
    borderWidth: 2,
  },
});

type Props = {length: number} & TextInputProps;

export const VerificationInput: React.FC<Props> = ({
  length,
  value,
  onChangeText,
  ...rest
}) => {
  const {baseBackgroundColor, secondaryColor} = useColors();
  const InputRef = React.useRef<TextInput>(null);
  const handleFocus = React.useCallback(() => {
    if (InputRef) {
      InputRef.current && InputRef.current.focus();
    }
  }, [InputRef]);
  const renderCell = () => {
    const currentValue = value || '';
    const valueArray = getArray(currentValue, length);
    return valueArray.map((char, index) => {
      return (
        <TouchableOpacity key={index} onPress={handleFocus}>
          <View
            style={[
              styles.characterContainer,
              {backgroundColor: baseBackgroundColor},
              currentValue.length === index && {
                ...StyleSheet.flatten(styles.focused),
                borderColor: secondaryColor,
              },
            ]}>
            <Typography style={styles.character}>{char}</Typography>
          </View>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View>
      <View style={styles.cellContainer}>{renderCell()}</View>
      <TextInput
        {...rest}
        style={styles.input}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="characters"
        onChangeText={(text) => {
          onChangeText && onChangeText(truncate(text, length));
        }}
        returnKeyType="done"
        value={value}
        ref={InputRef}
      />
    </View>
  );
};
