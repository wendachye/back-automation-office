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
import colors from "modules/settings/theme-settings/theme/theme-dark/base/colors";
import borders from "modules/settings/theme-settings/theme/theme-dark/base/borders";
import boxShadows from "modules/settings/theme-settings/theme/theme-dark/base/boxShadows";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "modules/settings/theme-settings/theme/theme-dark/functions/pxToRem";
import linearGradient from "modules/settings/theme-settings/theme/theme-dark/functions/linearGradient";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

// types
type Types = any;

const stepper: Types = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
