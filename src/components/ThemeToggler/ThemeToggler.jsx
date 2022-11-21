import React from "react";
import { useTheme } from "../../hooks/useTheme";


const ThemeToggler = () => {
    const {theme, setTheme} = useTheme()
    const [checked, setChecked] = React.useState(theme === "light")

    const handleChange = () =>{
        if(checked){
            setTheme("dark")
        } else(
            setTheme("light")
        )
        setChecked(!checked)
    }

  return (
    <div className="theme_toggler">
      <label className="form-switch">
        <input type="checkbox" checked={checked} onChange={handleChange}/>
        <i></i>
      </label>
    </div>
  );
};

export default ThemeToggler;
