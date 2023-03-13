import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({children, onPress}: ButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
