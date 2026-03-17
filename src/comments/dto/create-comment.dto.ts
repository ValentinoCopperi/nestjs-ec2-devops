import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'This is a comment' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  taskId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  authorId: number;
}
