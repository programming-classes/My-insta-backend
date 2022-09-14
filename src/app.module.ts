import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './posts/post.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/my-insta'), PostModule],
})
export class AppModule {}
