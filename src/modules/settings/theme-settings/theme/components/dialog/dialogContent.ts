/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import typography from "../../base/typography";
import borders from "../../base/borders";
import colors from "../../base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "../../functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

// types
type Types = any;

const dialogContent: Types = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};

export default dialogContent;
