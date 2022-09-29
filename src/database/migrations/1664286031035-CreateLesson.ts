import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateLesson1664286031035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'lessons',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
                },
                {
                    name:'author_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'title', 
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'banner',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'text_content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'image_content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'video_content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'audio_content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'embed_content',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                }
              ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lessons');
    }

}
