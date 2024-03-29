import {Controller, Inject} from '@nestjs/common'
import {MessagePattern} from '@nestjs/microservices'

import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    @Inject() private readonly service: UsersService

    @MessagePattern({cmd: 'findme'})
    public async findMe(id: number): Promise<any> {
        return await this.service.findMe(id)
    }
}
