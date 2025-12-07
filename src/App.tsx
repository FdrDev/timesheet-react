import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Navbar} from "@/components/blocks/Navbar.tsx";
import Dashboard from './pages/Dashboard';

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <main className="pt-14 w-10/12 mx-auto">
                    <Navbar/>
                    <Dashboard/>
                </main>
            </ThemeProvider>

        </>
    )
}

export default App
