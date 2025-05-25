import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';

@Injectable()
export class ProductService {
    private products=['banana','maçã']
    constructor(private prisma: PrismaService){
    }
    get_products(){
        return this.products
    }
    create_product(dto: CreateProductDto){
        this.products.push(dto.name)
    }
}
