import { AppState } from "../AppState.js"
import { Event } from "../models/Event.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EventsService {
    async getEvents() {
        const res = await api.get('api/events')
        logger.log('[HERE ARE YOUR EVENTS', res.data)
        AppState.events = res.data.map(e => new Event(e))
    }
    async getEventsById(eventId) {
        const res = await api.get(`/api/events/${eventId}`)
        logger.log('[GETTING EVENTS BY ID', res.data)
        AppState.activeEvent = new Event(res.data)
    }
    async createEvent(formData) {
        const res = await api.post('api/events', formData)
        logger.log('[HERE IS THE NEW EVENT', res.data)
        AppState.events.push(new Event(res.data))
        return res.data
    }
    async removeEvent(eventId) {
        
        const res = await api.delete(`api/events/${eventId}`)
        AppState.activeEvent.isCanceled = true
        AppState.activeEvent
    }
}
export const eventsService = new EventsService()
