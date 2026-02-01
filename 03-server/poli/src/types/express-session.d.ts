import 'express-session';

declare module 'express-session' {
  interface SessionData {
    // Add your session properties here
    userId?: string;
    // ...other properties you use in your session
  }
}

declare global {
  namespace Express {
    interface Request {
      session: Session & Partial<SessionData>;
    }
  }
}