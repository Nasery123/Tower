import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService {
    async createComment(commentData) {
        const comment = await dbContext.Comment.create(commentData)
        await comment.populate('creator')
        return comment

    }
    async findEventComment(eventId) {
        const comments = await dbContext.Comment.find({ eventId: eventId }).populate('creator')
        return comments
    }
    async deletComment(commentId, userId) {
        const comment = await dbContext.Comment.findById(commentId).populate('creator')
        if (!comment) throw new BadRequest('we were not able to find the commment')
        if (comment.creatorId != userId) throw new Forbidden("you can delet only your own comments")

        await comment.remove()
        return 'you successfully deleted your comment'


    }

}
export const commentsService = new CommentsService()
