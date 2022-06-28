import { Entity, Column, PrimaryGeneratedColumn, EntityManager } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 50 })
  title!: string;

  @Column("varchar", { length: 50 })
  author!: string;

  @Column("varchar", { length: 20 })
  status!: string;
}