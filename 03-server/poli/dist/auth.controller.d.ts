import type { Request, Response } from 'express';
export declare class AuthController {
    login(req: Request, res: Response): Response<any, Record<string, any>>;
    logout(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
}
