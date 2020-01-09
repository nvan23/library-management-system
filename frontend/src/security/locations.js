import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Locations {
    static get values() {
        return {
            tthl_floor_1_bookshelf_no_1: 'tthl_floor_1_bookshelf_no_1',
            tthl_floor_1_bookshelf_no_2: 'tthl_floor_1_bookshelf_no_2',
            tthl_floor_1_bookshelf_no_3: 'tthl_floor_1_bookshelf_no_3',
            tthl_floor_1_bookshelf_no_4: 'tthl_floor_1_bookshelf_no_4',
            tthl_floor_1_bookshelf_no_5: 'tthl_floor_1_bookshelf_no_5',
            tthl_floor_1_bookshelf_no_6: 'tthl_floor_1_bookshelf_no_6',
            tthl_floor_1_bookshelf_no_7: 'tthl_floor_1_bookshelf_no_7',
            tthl_floor_1_bookshelf_no_8: 'tthl_floor_1_bookshelf_no_8',
            tthl_floor_1_bookshelf_no_9: 'tthl_floor_1_bookshelf_no_9',
            tthl_floor_1_bookshelf_no_10: 'tthl_floor_1_bookshelf_no_10',
            tthl_floor_2_bookshelf_no_1: 'tthl_floor_2_bookshelf_no_1',
            tthl_floor_2_bookshelf_no_2: 'tthl_floor_2_bookshelf_no_2',
            tthl_floor_2_bookshelf_no_3: 'tthl_floor_2_bookshelf_no_3',
            tthl_floor_2_bookshelf_no_4: 'tthl_floor_2_bookshelf_no_4',
            tthl_floor_2_bookshelf_no_5: 'tthl_floor_2_bookshelf_no_5',
            tthl_floor_2_bookshelf_no_6: 'tthl_floor_2_bookshelf_no_6',
            tthl_floor_2_bookshelf_no_7: 'tthl_floor_2_bookshelf_no_7',
            tthl_floor_2_bookshelf_no_8: 'tthl_floor_2_bookshelf_no_8',
            tthl_floor_2_bookshelf_no_9: 'tthl_floor_2_bookshelf_no_9',
            tthl_floor_2_bookshelf_no_10: 'tthl_floor_2_bookshelf_no_10',
        };
    }

    static labelOf(locationId) {
        if (!this.values[locationId]) {
            return locationId;
        }

        return i18n(`locations.${locationId}.label`);
    }

    static descriptionOf(locationId) {
        if (!this.values[locationId]) {
            return locationId;
        }

        return i18n(`locations.${locationId}.description`);
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

export default Locations;
