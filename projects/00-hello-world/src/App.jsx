import React from "react"
import './css/App.css'
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: "paco",
        name: "Paco Loco",
        initialIsFollowing: true
    },
    {
        userName: "minecraft",
        name: "Juan Hernandez",
        initialIsFollowing: false
    },
    {
        userName: "PacoHdezs",
        name: "Paco Hdezs",
        initialIsFollowing: true
    },
    {
        userName: "midudev",
        name: "Miguel Duran",
        initialIsFollowing: false
    }
];

export function App(){
    return (
        <section className="App">
            {
                users.map(({userName, name, initialIsFollowing}) => 
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={initialIsFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            }
        </section>
    )
}
