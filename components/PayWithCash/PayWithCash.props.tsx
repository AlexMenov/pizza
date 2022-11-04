import { ReactNode } from "react";
export interface payWithCashProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    showPopup: boolean
} 