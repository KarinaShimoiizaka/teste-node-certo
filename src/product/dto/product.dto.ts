import { Decimal } from "generated/prisma/runtime/library";
import { IsNotEmpty } from "class-validator"

export class CreateProductDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: Decimal;
    
    image_url?: string
}