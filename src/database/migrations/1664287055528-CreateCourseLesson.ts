import {MigrationInterface, QueryRunner,Table, TableForeignKey} from "typeorm";

export class CreateCourseLesson1664287055528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'courses_lessons',
              columns: [
                {
                    name:'course_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name:'lesson_id',
                    type: 'uuid',
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

        await queryRunner.createForeignKey('courses_lessons',  new TableForeignKey({
            name: 'course',
            columnNames: ['course_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'courses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
        await queryRunner.createForeignKey('courses_lessons',  new TableForeignKey({
            name: 'lesson',
            columnNames: ['lesson_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'lessons',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses_lessons');

    }

}
