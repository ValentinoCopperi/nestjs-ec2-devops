import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateOrganizationDto) {
    const slug = dto.slug ?? dto.name.toLowerCase().replace(/\s+/g, '-');
    return this.prisma.organization.create({ data: { ...dto, slug } });
  }

  findAll() {
    return this.prisma.organization.findMany({ include: { members: true } });
  }

  async findOne(id: number) {
    const org = await this.prisma.organization.findUnique({
      where: { id },
      include: { members: true, projects: true },
    });
    if (!org) throw new NotFoundException(`Organization #${id} not found`);
    return org;
  }

  async update(id: number, dto: UpdateOrganizationDto) {
    await this.findOne(id);
    return this.prisma.organization.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.organization.delete({ where: { id } });
  }
}
