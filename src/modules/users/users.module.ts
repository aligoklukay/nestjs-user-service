import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {ConfigModule} from 'src/config/config.module'
import {User} from 'src/entities/user.entity'
import {UsersController} from './ users.controller'
import {UsersService} from './users.service'

@Module({
    imports: [TypeOrmModule.forFeature([User]), ConfigModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
