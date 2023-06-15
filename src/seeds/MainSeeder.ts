import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { PublicationSeeder } from "./PublicationSeeder";
import { QuestionSeeder } from "./QuestionSeeder";
import { UserSeeder } from "./UserSeeder";
import { CategorySeeder } from "./CategorySeeder";
export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, UserSeeder)
        await runSeeder(dataSource, CategorySeeder)
        await runSeeder(dataSource, PublicationSeeder)
        await runSeeder(dataSource, QuestionSeeder)
    }
}
