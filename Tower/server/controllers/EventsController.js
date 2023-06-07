import { Auth0Provider } from "@bcwdev/auth0provider"
import { eventsService } from "../services/EventsService.js"
import BaseController from "../utils/BaseController.js"
import { dbContext } from "../db/DbContext.js"
import { ticketsService } from "../services/TicketsService.js"
import { commentsService } from "../services/CommentsService.js"

export class EventsController extends BaseController {
    constructor() {
        super('api/events')
        this.router
            .get('', this.findAllEvents)
            .get('/:eventId', this.getEventById)
            .get('/:eventId/comments', this.findeventsComment)
            .get('/:eventId/tickets', this.findEventTicket)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createEvent)
            .put('/:eventId', this.EditEvent)
            .delete('/:eventId', this.deletEvent)

    }

    async createEvent(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const event = await eventsService.createEvent(req.body)

            return res.send(event)
        } catch (error) {
            next(error)
        }
    }
    async findAllEvents(req, res, next) {
        try {
            const eve = await eventsService.findALlEvents()
            return res.send(eve)
        } catch (error) {
            next(error)
        }
    }
    async getEventById(req, res, next) {
        try {
            const eve = await eventsService.findEventById(req.params.eventId)
            return res.send(eve)
        } catch (error) {
            next(error)

        }

    }
    async EditEvent(req, res, next) {
        try {
            const eventData = req.body
            const eventId = req.params.eventId
            const userId = req.userInfo.id
            // const eventId = req.params.eventId
            const eve = await eventsService.EditEvent(userId, eventData, eventId)
            return res.send(eve)
        } catch (error) {
            next(error)
        }
    }
    async deletEvent(req, res, next) {
        try {
            const eventId = req.params.eventId
            const userId = req.userInfo.id
            await eventsService.deletEvent(eventId, userId)
            return res.send(`the event canceled`)
        } catch (error) {
            next(error)
        }
    }
    async findEventTicket(req, res, next) {
        try {
            const tickets = await ticketsService.findEventsTicket(req.params.eventId)
            return res.send(tickets)
        } catch (error) {
            next(error)
        }
    }

    async findeventsComment(req, res, next) {
        try {
            const comments = await commentsService.findEventComment(req.params.eventId)
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }


}
