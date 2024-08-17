//eslint-disable-next-line

import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
// Dummy usage to bypass unused import error
const PaletteTypes = (): Palette | PaletteColor | null => {
    return null;
};

// Call the dummy function
PaletteTypes();


declare module "@mui/material/styles/createPalette" {
    interface PaletteColor{
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }

}