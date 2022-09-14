import { Controller, Get, Param } from '@nestjs/common';
import { Post } from './post.model';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  getAll(): Promise<Post[]> {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param() params: { id: string }): Promise<Post> {
    return this.service.findOne(params.id);
  }

  @Get('/:id/comments')
  getComments(@Param() params: { id: string }): Promise<Post> {
    return this.service.findOne(params.id);
  }
}
