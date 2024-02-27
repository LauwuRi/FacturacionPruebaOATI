import { Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import { Factura } from './factura';

@Table({
    timestamps: false,
    tableName: 'producto',
})
export class Producto extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cantidad!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    precio!: number;

    @HasMany(() => Factura)
    facturas!: Factura[];
}