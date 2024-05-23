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
import typography from "modules/settings/theme-settings/theme/theme-dark/base/typography";
import colors from "modules/settings/theme-settings/theme/theme-dark/base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import rgba from "modules/settings/theme-settings/theme/theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;

// types
type Types = any;

const dialogContentText: Types = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },
  },
};

export default dialogContentText;