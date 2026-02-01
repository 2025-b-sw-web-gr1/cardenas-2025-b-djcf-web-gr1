import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    // Verificamos si existe sesión
    if (!req.session || !req.session.user) {
      throw new UnauthorizedException('No hay sesión activa');
    }

    // Verificamos si el usuario es admin
    if (req.session.user !== 'admin') {
      throw new ForbiddenException('Acceso denegado, se requiere rol admin');
    }

    return true; // Permite el acceso
  }
}
 