import { ReactNode } from "react";
export interface ParagraphProps {
    size: "L" | "M" | "S",
    children: ReactNode,
    style?: Record<string, unknown>
}