import StringArrayField from '@/shared/fields/string-array-field';
import * as yup from 'yup';
import Categories from '@/security/categories';
import Topics from '@/security/topics';
import Types from '@/security/types';
import Locations from '@/security/locations';
import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import GenericField from '@/shared/fields/generic-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.book.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.book.enumerators.${name}.${value}`);
}

class CategoriesField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);

    this.options = Categories.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
            .map((value) => Categories.labelOf(value))
            .join(' ')
          : null,
      );
  }
}

class TopicsField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);

    this.options = Topics.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
            .map((value) => Topics.labelOf(value))
            .join(' ')
          : null,
      );
  }
}

class TypesField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);

    this.options = Types.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
            .map((value) => Types.labelOf(value))
            .join(' ')
          : null,
      );
  }
}

class LocationsField extends StringArrayField {
  constructor(name, label, config) {
    super(name, label, config);

    this.options = Locations.selectOptions;
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
            .map((value) => Locations.labelOf(value))
            .join(' ')
          : null,
      );
  }
}


const fields = {
  id: new IdField('id', label('id')),
  isbn: new StringField('isbn', label('isbn'), {
    "required": true,
    "max": 13,
    "min": 13,
  }),
  title: new StringField('title', label('title'), {
    "required": true,
    "max": 255
  }),
  series: new StringField('series', label('series'), {
    "required": false,
    "max": 255
  }),
  author: new StringField('author', label('author'), {
    "required": true,
    "max": 255
  }),
  publishingCompany: new StringField('publishingCompany', label('publishingCompany'), {
    "required": true,
    "max": 255
  },),
  numberOfCopies: new IntegerField('numberOfCopies', label('numberOfCopies'), {
    "required": true,
    "min": 1,
  }),
  // loanPeriodInDays: new IntegerField(
  //   'loanPeriodInDays',
  //   label('loanPeriodInDays'),
  //   { required: true, min: 1 },
  // ),
  stock: new IntegerField('stock', label('stock'), {}),
  images: new ImagesField('images', label('images'), 'book/images',{
    "max": 3,
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'available', label: enumeratorLabel('status', 'available') },
    { id: 'unavailable', label: enumeratorLabel('status', 'unavailable') },
  ],{}),
  category: new EnumeratorField(
    'category',
    label('category'),
    Categories.selectOptions,
  ),
  topic: new EnumeratorField(
    'topic',
    label('topic'),
    Topics.selectOptions,
  ),
  type: new EnumeratorField(
    'type',
    label('type'),
    Types.selectOptions,
  ),
  location: new EnumeratorField(
    'location',
    label('location'),
    Locations.selectOptions,
  ),
  categoriesRequired: new CategoriesField('categories', label('categories'), 
    {
      required: true,
    }
  ),
  topicsRequired: new TopicsField('topics', label('topics'),
    {
      required: true,
    }
  ),
  typesRequired: new TypesField('types', label('types'),
    {
      required: true,
    }
  ),
  locationsRequired: new LocationsField('locations', label('locations'),
    {
      required: true,
    }
  ),
  categories: new CategoriesField('categories', label('categories'), {
    required: true
  }),
  topics: new TopicsField('topics', label('topics'), {
    required: true
  }),
  types: new TypesField('types', label('types'), {
    required: true
  }),
  locations: new LocationsField('locations', label('locations'), {
    required: true
  }),
  categoryBook: new GenericField('categoryBook', label('categoryBook')),
  topicBook: new GenericField('topicBook', label('topicBook')),
  typeBook: new GenericField('typeBook', label('typeBook')),
  locationBook: new GenericField('locationBook', label('locationBook')),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  numberOfCopiesRange: new IntegerRangeField(
    'numberOfCopiesRange',
    label('numberOfCopiesRange'),
  ),
  stockRange: new IntegerRangeField(
    'stockRange',
    label('stockRange'),
  ),
};

export class BookModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
