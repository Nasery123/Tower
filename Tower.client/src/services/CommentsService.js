import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService {

    // why I am getting emty Array ?
    // how to get array to get my model
    async getCommentsByEventId(eventId) {
        const res = await api.get(`api/events/${eventId}/comments`)
        logger.log('[GETTING COMMENTS', res.data)
        // AppState.comments = res.data.map(c => new)
    }
}
export const commentsService = new CommentsService()
