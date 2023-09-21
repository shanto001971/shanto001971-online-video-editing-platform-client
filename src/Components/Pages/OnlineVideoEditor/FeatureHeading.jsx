import { useTheme } from "../../ThemeProvider/ThemeProvider";

const FeatureHeading = ({ heading }) => {
  const { theme } = useTheme(); //for dark and light themes
  return (
    <div>
      <h2
        className={` font-bold leading-tight text-left text-[46px] ${
          theme.mode === "dark" ? "text-gray-100" : "text-black"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default FeatureHeading;
