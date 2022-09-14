import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    console.log('id: ', id);
    return this.postModel.findById(id).exec();
  }

  async create(post: Post): Promise<Post> {
    return this.postModel.create(post);
  }

  async update(id: string, post: Post): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, post, { new: true }).exec();
  }

  async delete(id: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
