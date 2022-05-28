import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {ConfigModule} from './config/config.module'
import {ConfigService} from './config/config.service'
import {UsersModule} from './modules/users/users.module'

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.postgres.host,
                port: config.postgres.port,
                username: config.postgres.user,
                password: config.postgres.password,
                database: config.postgres.database,
                entities: [__dirname + '/**/*.entity.{ts,js}'],
                synchronize: true,
            }),
        }),
        UsersModule,
    ],
})
export class AppModule {}
