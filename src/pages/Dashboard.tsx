import { ClientForm } from "@/features/clients/ClientForm"
import { ClientsList } from "@/features/clients/ClientsList"
import { TimerControls } from "@/features/timer/TimerControls"
import { TimerDisplay } from "@/features/timer/TimerDisplay"


export const Dashboard: React.FC = () => {

    return ( 
    <>
        <div>Dashboard</div>
        <ClientsList />
        <ClientForm />
        <TimerControls />
        <TimerDisplay />
    </>
    )


}

export default Dashboard