import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn === true) {
    return next()
  }

  return res.status(401).send('Not authorized')
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label> 
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <h1>You're logged in congrats champ!</h1>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <h1>You're not logged in :/</h1>
        <a href="/login">Login</a>
      </div>
    `)
  }
})

router.get('/protected', [requireAuth], (req: Request, res: Response) => {
  return res.send('Welcome to protected route')
})

export { router }
