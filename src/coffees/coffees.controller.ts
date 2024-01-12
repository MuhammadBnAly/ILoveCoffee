import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll(){
        return 'This action returns all coffees';
    }
    // @Get(':id')
    // findOne(@Param() params){
    //     return `This action returns ${params.id} coffees`;
    // }
    @Get('num/:id')
    findTwo(@Param('id') id:string){
        return `This action returns ${id} coffees`;
    }
    
}
