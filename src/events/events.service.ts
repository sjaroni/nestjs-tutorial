import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  private events = [
    { id: 1, name: 'Tech Conference 2025' },
    { id: 2, name: 'Angular Meetup Hamburg' },
    { id: 3, name: 'NestJS Workshop Berlin' }
  ];

  findAll() {
    return this.events;
  }
}
