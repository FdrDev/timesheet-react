import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ClientsList} from "@/features/clients/ClientsList.tsx";
import {Navbar} from "@/components/blocks/Navbar.tsx";

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <main className="pt-14">
                    <Navbar/>
                    <ClientsList />
                </main>
            </ThemeProvider>

        </>
    )
}

export default App
