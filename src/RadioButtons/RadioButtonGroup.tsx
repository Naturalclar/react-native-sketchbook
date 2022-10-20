import * as React from 'react';

type Props = {
  onValueChange: (value: string) => void;
  value: string;
};

export type RadioButtonContextType = {
  value: string;
  onValueChange: (item: string) => void;
} | null;

export const RadioButtonContext =
  React.createContext<RadioButtonContextType>(null);

export const RadioButtonGroup: React.FC<React.PropsWithChildren<Props>> = ({
  onValueChange,
  value,
  children,
}) => {
  return (
    <RadioButtonContext.Provider value={{value, onValueChange}}>
      {children}
    </RadioButtonContext.Provider>
  );
};
