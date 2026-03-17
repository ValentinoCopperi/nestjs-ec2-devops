import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTaskDto) {
    const { dueDate, ...rest } = dto;
    return this.prisma.task.create({
      data: {
        ...rest,
        status: rest.status as any,
        priority: rest.priority as any,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
      include: { project: true, assignments: { include: { user: true } }, tags: { include: { tag: true } } },
    });
  }

  findAll(projectId?: number) {
    return this.prisma.task.findMany({
      where: projectId ? { projectId } : undefined,
      include: {
        project: true,
        assignments: { include: { user: true } },
        tags: { include: { tag: true } },
        subTasks: true,
      },
    });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        project: true,
        assignments: { include: { user: true } },
        tags: { include: { tag: true } },
        comments: { include: { author: true } },
        subTasks: true,
        parent: true,
      },
    });
    if (!task) throw new NotFoundException(`Task #${id} not found`);
    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findOne(id);
    const { dueDate, ...rest } = dto;
    return this.prisma.task.update({
      where: { id },
      data: {
        ...rest,
        status: rest.status as any,
        priority: rest.priority as any,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.task.delete({ where: { id } });
  }

  assignUser(taskId: number, userId: number) {
    return this.prisma.taskAssignment.create({
      data: { taskId, userId },
      include: { user: true, task: true },
    });
  }

  unassignUser(taskId: number, userId: number) {
    return this.prisma.taskAssignment.delete({
      where: { taskId_userId: { taskId, userId } },
    });
  }

  addTag(taskId: number, tagId: number) {
    return this.prisma.taskTag.create({ data: { taskId, tagId } });
  }

  removeTag(taskId: number, tagId: number) {
    return this.prisma.taskTag.delete({
      where: { taskId_tagId: { taskId, tagId } },
    });
  }
}
