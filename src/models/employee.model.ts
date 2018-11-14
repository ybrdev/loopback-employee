import {Entity, model, property} from '@loopback/repository';

@model()
export class Employee extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  fullname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}
