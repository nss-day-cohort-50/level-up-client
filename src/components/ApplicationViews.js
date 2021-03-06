import React from "react"
import { Route } from "react-router-dom"
import { Profile } from "./auth/Profile"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"

export const ApplicationViews = () => {
    return (
        <main>
            <Route exact path="/">
                <GameList />
            </Route>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path="/game/new">
                <GameForm />
            </Route>
            <Route exact path="/game/edit/:gameId">
                <GameForm />
            </Route>
            <Route exact path="/event/new">
                <EventForm />
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>
        </main>
    )
    
}
