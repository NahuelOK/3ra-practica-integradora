import Mail from "../modules/mail.module.js"
import { UserDAO, TicketDAO } from "../DAO/factory.js"
import UserRepository from "./users.repository.js"
import TicketRepository from "./tickets.repository.js"

const ticketDAO = new TicketDAO()
const userDAO = new UserDAO()
const mailModule = new Mail()

export const UserService = new UserRepository(userDAO, ticketDAO, mailModule)
export const TicketService = new TicketRepository(ticketDAO)

