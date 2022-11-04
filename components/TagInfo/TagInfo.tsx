import { TagInfoProps } from "./TagInfo.props";
import { TagInfoMedium, TagInfoSmall } from "./TagInfo.style";
import Link from "next/link";
export const TagInfo = ({ size = "M", href = "/", children }: TagInfoProps): JSX.Element => {
    switch (size) {
        case "M":
            return <Link href={href}><TagInfoMedium>{children}</TagInfoMedium></Link>;
        case "S":
            return <Link href={href}><TagInfoSmall>{children}</TagInfoSmall></Link>;
    }
};
