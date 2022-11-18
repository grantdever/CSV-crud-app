import { Injectable } from '@nestjs/common';
// just the basic app service created at the instantiation of the project
@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}
