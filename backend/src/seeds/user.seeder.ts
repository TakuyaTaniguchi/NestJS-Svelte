import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    // TRUNCATE TABLE を DELETE FROM に置き換える
    await dataSource.query('DELETE FROM `user`');

    const repository = dataSource.getRepository(User);
    await repository.insert({
      name: 'John Doe',
      email: 'hgoe',
      avatar: 'https://i.pravatar.cc/300',
      description: 'Lorem',
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}
