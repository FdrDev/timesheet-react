import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ClientsList} from "@/features/clients/ClientsList.tsx";
import {Navbar} from "@/components/blocks/Navbar.tsx";
import {ClientForm} from "@/features/clients/ClientForm.tsx";
import { TimerDisplay } from './features/timer/TimerDisplay';
import { TimerControls } from './features/timer/TimerControls';

function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <main className="pt-14 w-10/12 mx-auto">
                    <Navbar/>
                    <ClientsList />
                    <ClientForm />
                    <TimerControls />
                    <TimerDisplay />
                </main>
            </ThemeProvider>

        </>
    )
}

export default App
