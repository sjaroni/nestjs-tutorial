import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

  constructor(private eventService: EventsService){}

  @Get()
  findAll(): any[]{
    return this.eventService.findAll();
  }
  // http://localhost:3000/events

  @Get(':id')
findOne(@Param('id') id: string): any {
  return this.eventService.findAll().find(event => event.id === parseInt(id));
}
  // http://localhost:3000/events/2
}

