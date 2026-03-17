import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTagDto) {
    return this.prisma.tag.create({ data: dto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (!tag) throw new NotFoundException(`Tag #${id} not found`);
    return tag;
  }

  async update(id: number, dto: UpdateTagDto) {
    await this.findOne(id);
    return this.prisma.tag.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.tag.delete({ where: { id } });
  }
}
