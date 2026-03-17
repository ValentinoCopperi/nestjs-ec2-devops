import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: dto,
      include: { author: true, task: true },
    });
  }

  findAllByTask(taskId: number) {
    return this.prisma.comment.findMany({
      where: { taskId },
      include: { author: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: { author: true, task: true },
    });
    if (!comment) throw new NotFoundException(`Comment #${id} not found`);
    return comment;
  }

  async update(id: number, dto: UpdateCommentDto) {
    await this.findOne(id);
    return this.prisma.comment.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.comment.delete({ where: { id } });
  }
}
