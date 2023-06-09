import { AppState } from "../AppState.js"
import { Ticket } from "../models/Ticket.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TicketsService {
    async getMyTicket() {
        const res = await api.get('account/tickets')
        AppState.myTickets = res.data
        logger.log('[HERE IS YOUR TICKETS]', AppState.myTickets)
        return res.data

    }
    async getTicketByEventId(eventId) {
        const res = await api.get(`api/events/${eventId}/tickets`)
        logger.log('[GETTING TICKETS FOR THIS EVENT', res.data)
        AppState.tickets = res.data
    }
    async createTicket(eventId) {
        const res = await api.post('api/tickets', { eventId })
        logger.log('[creating ticket]', res.data)
        AppState.activeEvent.capacity--
        logger.log('[capacity]', AppState.activeEvent.capacity)
        AppState.tickets.push(res.data)
        return res.data
    }
    async removeTicket(ticketId) {
        const res = await api.delete(`api/tickets/${ticketId}`)
        logger.log('[deleting the ticket]', res.data)
        AppState.activeEvent.capacity++
        AppState.tickets.pop()
    }
}
export const ticketsService = new TicketsService()
