import useThemeStore from "../../hooks/themeStore";

const ThemeTogglerIcon = () => {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);

  const handleOnClick = () => {
    toggleTheme();
  };

  return (
    <span onClick={handleOnClick} role="button">
      {(currentTheme === "light" || currentTheme === null) && (
        <i className="bi bi-moon-fill fs-4"></i>
      )}
      {currentTheme === "dark" && <i className="bi bi-sun-fill fs-4"></i>}
    </span>
  );
};

export default ThemeTogglerIcon;
