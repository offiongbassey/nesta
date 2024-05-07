import { abstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends abstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModule: Model<ReservationDocument>,
  ) {
    super(reservationModule);
  }
}
