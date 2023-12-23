import { ThemeProvider } from "./context/theme"
import Router from "./routes"
import "./App.css"
export default function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    )
}