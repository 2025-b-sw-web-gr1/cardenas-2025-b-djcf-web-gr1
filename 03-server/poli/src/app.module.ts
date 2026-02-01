import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './recetas/receta.entity'; 
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';

@Module({
  imports: [ // dentro de imports van los módulos que use nuestra aplicación
    TypeOrmModule.forRoot({ 
      type: 'sqlite', 
      database: 'database.sqlite', 
      entities: [Receta, Ingrediente], 
      synchronize: true, // ⚠️ Solo para desarrollo 
      }), 
    RecetasModule, 
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 