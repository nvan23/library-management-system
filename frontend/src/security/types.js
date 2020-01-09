import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Types {
    static get values() {
        return {
            book: 'book',
            newspaper: 'newspaper',
            journal: 'journal',
            dissertation: 'dissertation',
        };
    }

    static labelOf(typeId) {
        if (!this.values[typeId]) {
            return typeId;
        }

        return i18n(`types.${typeId}.label`);
    }

    static descriptionOf(typeId) {
        if (!this.values[typeId]) {
            return typeId;
        }

        return i18n(`types.${typeId}.description`);
    }

    static get selectOptions() {
        return _values(this.values).map((value) => ({
            id: value,
            value: value,
            title: this.descriptionOf(value),
            label: this.labelOf(value),
        }));
    }
}

export default Types;
