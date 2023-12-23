import { createContext, useEffect, useState } from "react";
import { useStorage } from "../hooks";
import Loading from "../components/Loading";
export const ThemeContext = createContext()
const useSto = useStorage()

export function ThemeProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = useState("light")

    async function toggle() {
        let changeTheme = theme === 'light' ? "dark" : "light";

        await useSto.setTheme(changeTheme)
        setTheme(changeTheme)
    }

    async function getLocalTheme() {
        setLoading(true)
        let themeLocal = await useSto.verifyTheme()

        if (themeLocal != null) {
            setLoading(false)
            setTheme(themeLocal)
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLocalTheme()
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}