import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MembersService } from './members.service';

@ApiTags('members')
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiOperation({ summary: 'Add a member to an organization' })
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List members by organization' })
  @ApiQuery({ name: 'organizationId', required: true, type: Number })
  findAll(@Query('organizationId', ParseIntPipe) organizationId: number) {
    return this.membersService.findAllByOrganization(organizationId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a member by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update member role' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMemberDto) {
    return this.membersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a member' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.remove(id);
  }
}
