import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
    @Post('create')
    create_product(@Body() dto: CreateProductDto) {
        return this.productService.create_product(dto)
    }
    @Get('get')
    get_products(){
        return this.productService.get_products()
    }
}
