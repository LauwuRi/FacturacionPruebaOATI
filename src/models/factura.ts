import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Unique} from 'sequelize-typescript';
import { Producto } from './producto';
import { Cliente } from './cliente';

@Table({
    timestamps: false,
    tableName: 'factura',
})

export class Factura extends Model{
    
    @Unique
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    id!: number;

    @ForeignKey(()=> Producto)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    producto_id!: number;

    @ForeignKey(()=> Cliente)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cliente_id!: number;

    @BelongsTo(()=> Producto)
    producto!: Producto;

    @BelongsTo(()=> Cliente)
    cliente!: Cliente;
}