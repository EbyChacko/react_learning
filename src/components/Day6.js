import { createContext, useState } from 'react';
import { useContext } from 'react';
function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="wrapper">
            <h4 className="days">Day 6</h4>
            <h2>Theme Switcher</h2>
            <div className='day6Theme' style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>


    );
}

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function Day6() {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
}

export default Day6;