import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    BookmarkModule,
  ],
})
export class AppModule {}
