import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Factura } from './factura';

@Table({
    timestamps: false,
    tableName: 'cliente',
})
export class Cliente extends Model{
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
        type: DataType.STRING,
        allowNull: false,
    })
    telefono!: string;

    @HasMany(() => Factura)
    facturas!: Factura[];
}