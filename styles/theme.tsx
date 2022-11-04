const size = {
    mobile: "320px",
    tablets: "481px",
    correction: "700px",
    laptop: "769px",
    desktop: "1025px"
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablets: `(max-width: ${size.tablets})`,
    correction: `(max-width: ${size.correction})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
};
