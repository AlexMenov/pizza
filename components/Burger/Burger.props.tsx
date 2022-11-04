import { ReactNode } from "react";

export interface BurgerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode,
    show: boolean
}