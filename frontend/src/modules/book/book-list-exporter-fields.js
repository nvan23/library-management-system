import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;

export default [
  fields.id,
  fields.isbn,
  fields.title,
  fields.series,
  fields.author,
  fields.publishingCompany,
  fields.categories,
  fields.topics,
  fields.types,
  fields.locations,
  fields.numberOfCopies,
  // fields.loanPeriodInDays,
  fields.images,
  fields.status,
  fields.createdAt
];
