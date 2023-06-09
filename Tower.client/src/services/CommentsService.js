import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService {

    // why I am getting emty Array ?
    // how to get array to get my model
    async getCommentsByEventId(eventId) {
        const res = await api.get(`api/events/${eventId}/comments`)
        logger.log('[GETTING COMMENTS', res.data)
        AppState.comments = res.data.map(c => new Comment(c))
    }
    async createComment(FormData) {
        const res = await api.post('api/comments', FormData)
        AppState.comments.push(new Comment(res.data))
    }
    async deletComment(id) {
        const res = await api.delete(`api/comments/${id}`)
        logger.log(res.data, '[YOU DELETED YOUR COMMENT]')
    }
}
export const commentsService = new CommentsService()
