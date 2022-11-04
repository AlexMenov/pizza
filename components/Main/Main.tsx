import { MainProps } from "./Main.props";
import { MainStyled } from "./Main.style";
export const Main = ({ children }: MainProps) => {
    return <MainStyled>
        {children}
    </MainStyled>;
};
