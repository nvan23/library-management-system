import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;

export default [
  fields.isbn,
  fields.title,
  fields.series,
  fields.author,
  fields.publishingCompany,
  fields.types,
  fields.numberOfCopies,
  // fields.loanPeriodInDays,
  fields.images,
];
