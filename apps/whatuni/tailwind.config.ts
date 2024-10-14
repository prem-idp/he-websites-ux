import { Container } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1216px",
    },
    screens: {
      xs: "350px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1300px",
      xxl: "1400px",
      xxl2: "1600px",
      xxxl: "1920px",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "heading-xl": ["5.2rem", "5.6rem"], //'52px','56px'
      "heading-lg": ["4.4rem", "4.8rem"], //'44px','48px'
      heading1: ["4rem", "4.8rem"], //'40px','48px'
      heading2: ["3.6rem", "4.4rem"], //'36px','44px'
      heading3: ["3.2rem", "4rem"], //'32px','40px'
      heading4: ["2.8rem", "3.6rem"], //'28px', '36px'
      heading5: ["2.4rem", "3.2rem"], //'24px', '32px'
      heading6: ["2rem", "2.8rem"], //'20px', '28px'
      "para-lg": ["1.8rem", "2.4rem"], //'18px', '24px'
      para: ["1.6rem", "2.4rem"], //'16px', '24px'
      small: ["1.4rem", "2rem"], //'14px', '20px'
      "x-small": ["1.2rem", "2rem"], //'12px','20px'
      overline: ["1.4rem", "1.2rem"], //'14px', '12px'
    },
    extend: {
      colors: {
        gray: {
          400: "#707070",
          500: "#767676",
        },
        neutral: {
          0: "#334155",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#3B3D52",
          800: "#1E293B",
          900: "#0F172A",
        },
        primary: {
          50: "#EEFBFF",
          100: "#DDF6FF",
          200: "#BAEDFF",
          300: "#87E0FF",
          400: "#54D2FF",
          500: "#00BBFD",
          600: "#00A4DD",
          700: "#00759E",
          800: "#00465F",
          900: "#001720",
        },
        secondary: {
          50: "#F1F4FD",
          100: "#E4EAFA",
          200: "#C9D5F6",
          300: "#A0B5EF",
          400: "#6A8AE5",
          500: "#3460DC",
          600: "#173EAD",
          700: "#112F82",
          800: "#0C1F56",
          900: "#06102B",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
      },
      backgroundImage: {
        gradientBlack:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        gradient1: "linear-gradient(98.41deg, #6EE7B7 0%, #F59E0B 100%)",
        gradient2: "linear-gradient(98.41deg, #00BBFD 0%, #3460DC 100%)",
        gradient3: "linear-gradient(98.41deg, #10B981 0%, #00BBFD 100%)",
        gradient4: "linear-gradient(98.41deg, #0A28A3 0%, #34D399 100%)",
        gradient5: "linear-gradient(98.41deg, #FCD34D 0%, #69D8FF 100%)",
        gradient6: "linear-gradient(98.41deg, #87E0FF 0%, #FEF3C7 100%)",
        gradient7: "linear-gradient(98.41deg, #6EE7B7 0%, #BAEDFF 100%)",
        gradient8: "linear-gradient(98.41deg, #D97706 0%, #87E0FF 100%)",
        gradient9: "linear-gradient(98.41deg, #0A28A3 0%, #00A4DD 100%)",
        gradient10: "linear-gradient(98.41deg, #34D399 0%, #059669 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
