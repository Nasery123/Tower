import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { TowerEventsSchema } from '../models/TowerEvents.js';
import { TicketSchema } from '../models/Ticket.js';
import { CommentSchema } from '../models/Comments.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  TowerEvents = mongoose.model('TowerEvents', TowerEventsSchema);

  Ticket = mongoose.model('Ticket', TicketSchema);

  Comment = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
