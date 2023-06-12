import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class EventsService {


    async createEvent(eventData) {
        const eve = await dbContext.TowerEvents.create(eventData)
        await eve.populate('creator')
        await eve.populate('ticketCount')
        return eve

    }
    async findALlEvents() {
        const eve = await dbContext.TowerEvents.find().populate('creator ticketCount')
        return eve

    }
    async findEventById(eventId) {
        const eve = await dbContext.TowerEvents.findById(eventId).populate('creator ticketCount')
        if (!eve) {
            throw new BadRequest("could not find the event")
        }

        return eve

    }
    async EditEvent(userId, eventData, eventId) {
        const originalEvent = await this.findEventById(eventId)
        if (originalEvent.creatorId != userId) {
            throw new Forbidden("you are not allowed to edit this event")
        }
        if (originalEvent.isCanceled == true) throw new BadRequest("this event is already canceled")
        // const eve = await dbContext.TowerEvents.findById(eventId)
        // return eve

        originalEvent.name = eventData.name || originalEvent.name
        originalEvent.description = eventData.description || originalEvent.description
        originalEvent.coverImg = eventData.coverImg || originalEvent.coverImg
        originalEvent.location = eventData.localField || originalEvent.location
        originalEvent.capacity = eventData.capacity || originalEvent.capacity
        originalEvent.startDate = eventData.startDate || originalEvent.startDate
        originalEvent.type = eventData.type || originalEvent.type
        // originalEvent.isCanceled = eventData.isCanceled ? eventData.isCanceled : originalEvent?.isCanceled
        await originalEvent.save()
        return originalEvent

    }
    async deletEvent(eventId, userId) {
        const originalEvent = await this.findEventById(eventId)

        if (originalEvent.creatorId != userId) {
            throw new Forbidden("you can not Cancel other's event")
        }

        // if (originalEvent.isCanceled == true) {
        //     throw new BadRequest("this event is already canceled")

        // }
        originalEvent.isCanceled = true;
        await originalEvent.save()
        return originalEvent




    }
    async searchEvent(searchTerm) {
        const res = await dbContext.TowerEvents.find('/')

    }


}
export const eventsService = new EventsService()
