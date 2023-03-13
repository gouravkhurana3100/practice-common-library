import { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
}
declare const Button: ({ children, onPress }: ButtonProps) => JSX.Element;
export default Button;
