import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "@/store";
import {setClients} from "@/store/slices/clientsSlice.ts";

const savedClients = localStorage.getItem('clients')
if (savedClients){
    store.dispatch(setClients(JSON.parse(savedClients)))
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
