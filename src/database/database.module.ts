import { Global, Module } from '@nestjs/common';
const API_KEY = '12345634';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {

}
