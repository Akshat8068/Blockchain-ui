import type { ThemeMode } from '@/types';

interface Theme {
    id: string;
    colors: { primary: string };
}

interface ThemeContext {
    theme: Theme;
    themeMode: ThemeMode;
    availableThemes: Theme[];
    setTheme: (theme: Theme) => void;
    setThemeMode: (mode: ThemeMode) => void;
}

export function useTheme(): ThemeContext {
    return {
        theme: { id: 'default', colors: { primary: '0 0% 0%' } },
        themeMode: 'light',
        availableThemes: [],
        setTheme: () => { },
        setThemeMode: () => { },
    };
}
