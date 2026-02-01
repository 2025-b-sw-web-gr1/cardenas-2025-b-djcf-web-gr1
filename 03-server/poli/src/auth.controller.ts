import { Controller, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Req() req: Request, @Res() res: Response) {
    const { username, password } = req.body;

    // Verificamos si ya existe sesión activa
    if (req.session.user) {
      return res.status(400).json({
        message: 'Ya existe una sesión activa, deslogee primero.',
      });
    }

    // Credenciales quemadas
    if (username === 'admin' && password === '12345678') {
      req.session.user = 'admin'; // Guardamos solo el usuario
      return res.json({ message: 'Login exitoso', user: req.session.user });
    } else {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
        return res.json({ message: 'Sesión cerrada correctamente' });
      });
    } else {
      return res.status(400).json({ message: 'No hay sesión activa' });
    }
  }
}
 