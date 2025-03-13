import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  // private events = [
  //   { id: 1, name: 'Tech Conference 2025' },
  //   { id: 2, name: 'Angular Meetup Hamburg' },
  //   { id: 3, name: 'NestJS Workshop Berlin' }
  // ];

  // findAll() {
  //   return this.events;
  // }

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  // Optimiert, wenn man nur nach einem bestimmten Feld sucht
  findOne(id: number): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  // deprecated
  // findOne(id: string): Promise<Event | null> {
  //   return this.eventRepository.findOne(id);
  // }

  // findOne ist flexibler, da zusätzliche Optionen in where genutzt werden können
  // findOne(id: number): Promise<Event | null> {
  //   return this.eventRepository.findOne({ where: { id } });
  // }
}
