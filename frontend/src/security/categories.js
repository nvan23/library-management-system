import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Categories {
    static get values() {
        return {
            computersAndTech: 'computersAndTech',
            history: 'history',
            entertainment: 'entertainment',
            medical: 'medical',
            socialSciences: 'socialSciences',
            sports: 'sports',
            travel: 'travel',
            action: 'action',
            adventure: 'adventure',
            comic: 'comic',
            crime: 'crime',
            drama: 'drama',
            fantasy: 'fantasy',
            horror: 'horror',
            shortStory: 'shortStory',
        };
    }

    static labelOf(categoryId) {
        if (!this.values[categoryId]) {
            return categoryId;
        }

        return i18n(`categories.${categoryId}.label`);
    }

    static descriptionOf(categoryId) {
        if (!this.values[categoryId]) {
            return categoryId;
        }

        return i18n(`categories.${categoryId}.description`);
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

export default Categories;
