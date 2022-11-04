import { ContainerProps } from "./Container.props";
import { ContainerStyled } from "./Container.style";

export const Container = ({ children }: ContainerProps): JSX.Element => {
    return <ContainerStyled>
        {children}
    </ContainerStyled>;
};