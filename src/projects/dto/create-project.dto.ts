import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'My Project' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'Project description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  ownerId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  organizationId: number;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
