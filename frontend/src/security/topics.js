import { i18n } from '@/i18n';
import _values from 'lodash/values';

class Topics {
    static get values() {
        return {
            love: 'love',
            death: 'death',
            godVsEvil: 'godVsEvil',
            comingOfAge: 'comingOfAge',
            powerAndCorruption: 'powerAndCorruption',
            survival: 'survival',
            courageAndHeroism: 'courageAndHeroism',
            prejudice: 'prejudice',
            individualAndSociety: 'individualAndSociety',
            war: 'war',
        };
    }

    static labelOf(topicId) {
        if (!this.values[topicId]) {
            return topicId;
        }

        return i18n(`topics.${topicId}.label`);
    }

    static descriptionOf(topicId) {
        if (!this.values[topicId]) {
            return topicId;
        }

        return i18n(`topics.${topicId}.description`);
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

export default Topics;
