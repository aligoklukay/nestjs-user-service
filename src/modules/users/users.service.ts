import {Injectable} from '@nestjs/common'

import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {User} from 'src/entities/user.entity'

@Injectable()
export class UsersService {
    @InjectRepository(User) public userRepository: Repository<User>

    async findMe(id: number): Promise<any> {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        })

        delete user.password

        return user
    }
}
