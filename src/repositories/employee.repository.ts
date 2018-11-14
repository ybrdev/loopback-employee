import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Employee} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Employee, dataSource);
  }
}
