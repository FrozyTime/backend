import express from 'express'
import {
  RootRouter,
  AuthRouter,
  UsersRouter,
  UploadRouter,
  ProxyRouter,
  ImagesRouter,
  InvitesRouter,
  MailRouter,
  DiscordRouter,
  DomainRouter,
} from './routes'
import cors from 'cors'
const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
  let ip = req.headers['cf-connecting-ip'] as string
  req.ip = ip
  return next()
})

app.use(cors())

app.use('/', RootRouter)
app.use('/auth', AuthRouter)
app.use('/users', UsersRouter)
app.use('/images', ImagesRouter)
app.use('/invites', InvitesRouter)
app.use('/upload', UploadRouter)
app.use('/mail', MailRouter)
app.use('/proxy', ProxyRouter)
app.use('/discord', DiscordRouter)
app.use('/domains', DomainRouter)
export default async function listen(port: number) {
  return new Promise((resolve, reject) => {
    app.listen(port, resolve)
  })
}
