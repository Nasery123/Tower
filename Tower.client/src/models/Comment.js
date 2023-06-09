import { Profile } from "./Account.js"

export class Comment {
    constructor(data) {
        this.body = data.body
        this.creatorId = data.creatorId
        this.eventId = data.eventId
        this.creator = new Profile(data.creator)
        this.id = data.id

    }
}
