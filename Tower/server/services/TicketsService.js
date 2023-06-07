import { dbContext } from "../db/DbContext.js"
import { TowerEventsSchema } from "../models/TowerEvents.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TicketsService {

    async createTicket(ticketData) {
        const ticket = await dbContext.Ticket.create(ticketData)
        await ticket.populate('profile')
        await ticket.populate('event')
        return ticket
    }
    async getMyticket(accountId) {
        const tickets = await dbContext.Ticket.find({ accountId: accountId }).populate('profile event')

        return tickets
    }
    async findEventsTicket(eventId) {
        const tickets = await dbContext.Ticket.find({ eventId: eventId }).populate('profile event')
        return tickets
    }
    async removeTicket(ticketId, userId) {
        const ticket = await dbContext.Ticket.findById(ticketId).populate('event profile')
        if (!ticket) throw new BadRequest("could not find your ticket")

        if (ticket.accountId != userId) throw new Forbidden("you can not delet others ticket")

        await ticket.remove()
        return 'you do not have the ticket'
    }

}
export const ticketsService = new TicketsService()
