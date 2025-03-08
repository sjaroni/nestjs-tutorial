import { Controller, Get, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Get()
  findAll(): any[] {
    return this.eventService.findAll();
  }
  // http://localhost:3000/events


  // Path

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.eventService
      .findAll()
      .find((event) => event.id === parseInt(id));
  }
  // http://localhost:3000/events/2

  // @Get(':name')
  // findOne(@Param('name') name: string): any {
  //   return this.eventService
  //     .findAll()
  //     .find((event) => event.name === decodeURIComponent(name));
  // }

  //http://localhost:3000/events/Angular%20Meetup%20Hamburg

  // Query-Parameter
  // @Get()
  // findAll(@Query('name') name?: string): any[] | any {
  //   const events = this.eventService.findAll();

  //   if (name) {
  //     return events.find((event) => event.name === name);
  //   }

  //   return events; // Falls kein Name angegeben wird, alle Events zurückgeben
  // }

  // http://localhost:3000/events?name=Angular Meetup Hamburg
  //   Vorteile der Query-Parameter-Methode:
  // ✔ Bessere Lesbarkeit
  // ✔ Kein Encoding/Decoding nötig
  // ✔ Saubere URLs
}
