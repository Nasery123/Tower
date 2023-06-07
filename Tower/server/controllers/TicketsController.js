import { Auth0Provider } from "@bcwdev/auth0provider";
import { ticketsService } from "../services/TicketsService.js";
import BaseController from "../utils/BaseController.js";

export class TicketsController extends BaseController {
    constructor() {
        super('api/tickets')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTicket)
            .get('/:userId')
            .delete('/:ticketId', this.deletTicket)

    }

    async createTicket(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const ticket = await ticketsService.createTicket(req.body)
            return res.send(ticket)
        } catch (error) {
            next(error)
        }


    }
    async deletTicket(req, res, next) {
        try {
            const message = await ticketsService.removeTicket(req.params.ticketId, req.userInfo.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
    // async getMyTicket(req, res, next) {
    //     try {
    //         const userId = req.userInfo.id
    //         const ticket = await ticketsService.getMyticket(req.params.userId)
    //     } catch (error) {
    //         next(error)
    //     }
    // }
}
