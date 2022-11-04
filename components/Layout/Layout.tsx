import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { LayoutProps } from "./Layout.props";
export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return <>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>;
};