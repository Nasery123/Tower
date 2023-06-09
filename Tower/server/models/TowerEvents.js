import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const TowerEventsSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    coverImg: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true, min: 1 },
    startDate: { type: Date, required: true },
    creatorId: { type: ObjectId, required: true, ref: 'Account' },
    type: { type: String, required: true, enum: ['concert', 'convention', 'sport', 'digital'] },
    isCanceled: { type: Boolean, default: false },

}, { timestamps: true, toJSON: { virtuals: true } })


TowerEventsSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true,
})


TowerEventsSchema.virtual('ticketCount', {
    localField: '_id',
    foreignField: 'eventId',
    ref: 'Ticket',
    count: true
})
