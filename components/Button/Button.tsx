import { ButtonProps } from "./Button.props";
import { ButtonUsual } from "./Button.style";

export const Button = ({ children }: ButtonProps): JSX.Element => {
    return <ButtonUsual>{children}</ButtonUsual>;
}; 