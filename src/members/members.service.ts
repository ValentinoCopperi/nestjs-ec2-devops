import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateMemberDto) {
    return this.prisma.member.create({
      data: {
        userId: dto.userId,
        organizationId: dto.organizationId,
        role: dto.role as any,
      },
      include: { user: true, organization: true },
    });
  }

  findAllByOrganization(organizationId: number) {
    return this.prisma.member.findMany({
      where: { organizationId },
      include: { user: true },
    });
  }

  async findOne(id: number) {
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: { user: true, organization: true },
    });
    if (!member) throw new NotFoundException(`Member #${id} not found`);
    return member;
  }

  async update(id: number, dto: UpdateMemberDto) {
    await this.findOne(id);
    return this.prisma.member.update({
      where: { id },
      data: { role: dto.role as any },
      include: { user: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.member.delete({ where: { id } });
  }
}
