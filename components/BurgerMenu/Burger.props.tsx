import { ReactNode } from "react";

export interface BurgerMenuProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode,
    show: boolean
}