import { Profile } from "./Account.js"

export class Event {
    constructor(data) {
        this.id = data.id
        this.capacity = data.capacity
        this.description = data.description
        this.isCanceled = data.isCanceled
        this.name = data.name
        this.startDate = new Date(data.startDate).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
        this.type = data.type
        this.ticketCount = data.ticketCount
        this.remainingSpots = data.capacity - data.ticketCount
        this.location = data.location
        this.coverImg = data.coverImg

        this.creator = new Profile(data.creator)
    }
}
