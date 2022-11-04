import { PLarge, PMedium, PSmall } from "./Paragraph.style";
import { ParagraphProps } from "./Paragraph.props";

export const Paragraph = ({ size, children, ...props }: ParagraphProps): JSX.Element => {
    switch (size) {
        case "L":
            return <PLarge {...props}>{children}</PLarge>;
        case "M":
            return <PMedium {...props}>{children}</PMedium>;
        case "S":
            return <PSmall {...props}>{children}</PSmall>;
    }
};