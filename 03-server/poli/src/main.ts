import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import FileStore from 'session-file-store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const FileStoreSession = FileStore(session);

  app.use(
   session({
      secret: 'mi-secreto-super-seguro', // Cambia esto por una clave segura
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hora en milisegundos
        httpOnly: true,
        secure: false, // Cambiar a true si usas HTTPS
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
