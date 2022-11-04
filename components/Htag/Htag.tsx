import { H1, H2, H3 } from "./Htag.style";
import { HtagProps } from "./Htag.props";
export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <H1>{children}</H1>;
        case "h2":
            return <H2>{children}</H2>;
        case "h3":
            return <H3>{children}</H3>;
    }
};  