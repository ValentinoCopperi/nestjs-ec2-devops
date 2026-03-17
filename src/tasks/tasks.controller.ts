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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List tasks (optionally by projectId)' })
  @ApiQuery({ name: 'projectId', required: false, type: Number })
  findAll(@Query('projectId') projectId?: string) {
    return this.tasksService.findAll(projectId ? Number(projectId) : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }

  @Post(':id/assign/:userId')
  @ApiOperation({ summary: 'Assign a user to a task' })
  assignUser(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.tasksService.assignUser(id, userId);
  }

  @Delete(':id/assign/:userId')
  @ApiOperation({ summary: 'Remove a user from a task' })
  unassignUser(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.tasksService.unassignUser(id, userId);
  }

  @Post(':id/tags/:tagId')
  @ApiOperation({ summary: 'Add a tag to a task' })
  addTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.tasksService.addTag(id, tagId);
  }

  @Delete(':id/tags/:tagId')
  @ApiOperation({ summary: 'Remove a tag from a task' })
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.tasksService.removeTag(id, tagId);
  }
}
