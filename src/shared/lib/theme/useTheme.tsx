import { createContext, useContext, useState, type PropsWithChildren } from 'react'

export type Theme = 'light' | 'dark';

export interface IThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {

    const [theme, setTheme] = useState<Theme>('light');


    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider >
    )
}

export const useTheme = () : IThemeContext => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('ThemeContext underfined')
    }
    return context;
};
