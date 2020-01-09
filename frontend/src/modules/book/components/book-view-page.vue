<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/book' }">
        <app-i18n code="entities.book.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.book.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.book.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-book-view-toolbar
        v-if="record"
      ></app-book-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"
              ><i class="el-icon-date"></i> Overview</span
            >
            <app-view-item-text
              :label="fields.id.label"
              :value="presenter(record, 'id')"
            ></app-view-item-text>

            <app-view-item-text
              :label="fields.isbn.label"
              :value="presenter(record, 'isbn')"
            ></app-view-item-text>

            <app-view-item-text
              :label="fields.title.label"
              :value="presenter(record, 'title')"
            ></app-view-item-text>

            <app-view-item-text
              :label="fields.author.label"
              :value="presenter(record, 'author')"
            ></app-view-item-text>

            <app-view-item-text
              :label="fields.publishingCompany.label"
              :value="
                presenter(record, 'publishingCompany')
              "
            ></app-view-item-text>

            <app-view-item-custom
              :label="fields.categories.label"
              :value="presenter(record, 'categories')"
            >
              <div
                :key="categoryId"
                v-for="categoryId in record.categories"
              >
                <el-tooltip>
                  <span>{{
                    categoryLabelOf(categoryId)
                  }}</span>
                </el-tooltip>
              </div>
            </app-view-item-custom>

            <app-view-item-custom
              :label="fields.topics.label"
              :value="presenter(record, 'topics')"
            >
              <div
                :key="topicId"
                v-for="topicId in record.topics"
              >
                <el-tooltip>
                  <span>{{ topicLabelOf(topicId) }}</span>
                </el-tooltip>
              </div>
            </app-view-item-custom>
            
            <app-view-item-custom
              :label="fields.types.label"
              :value="presenter(record, 'types')"
            >
              <div
                :key="typeId"
                v-for="typeId in record.types"
              >
                <el-tooltip>
                  <span>{{ typeLabelOf(typeId) }}</span>
                </el-tooltip>
              </div>
            </app-view-item-custom>

          </el-tab-pane>

          <el-tab-pane label="Document Location">
            
            <app-view-item-custom
              :label="fields.locations.label"
              :value="presenter(record, 'locations')"
            >
              <div
                :key="locationId"
                v-for="locationId in record.locations"
              >
                <el-tooltip>
                  <span>{{
                    locationLabelOf(locationId)
                  }}</span>
                </el-tooltip>
              </div>
            </app-view-item-custom>
          </el-tab-pane>

          <el-tab-pane label="Logs">
            <app-view-item-text
              :label="fields.createdAt.label"
              :value="presenter(record, 'createdAt')"
            ></app-view-item-text>

            <app-view-item-text
              :label="fields.updatedAt.label"
              :value="presenter(record, 'updatedAt')"
            ></app-view-item-text>
          </el-tab-pane>

          <el-tab-pane label="Status">
            <app-view-item-custom
              :label="fields.status.label"
              :value="record.status"
            >
              <app-book-status-tag :value="record.status" />
            </app-view-item-custom>

            <app-view-item-text
              :label="fields.numberOfCopies.label"
              :value="presenter(record, 'numberOfCopies')"
            ></app-view-item-text>

            <!-- <app-view-item-text
              :label="fields.loanPeriodInDays.label"
              :value="presenter(record, 'loanPeriodInDays')"
            ></app-view-item-text> -->

            <app-view-item-text
              :label="fields.stock.label"
              :value="presenter(record, 'stock')"
            ></app-view-item-text>
          </el-tab-pane>

          <el-tab-pane label="Cover image">
            <!-- <app-view-item-image
              :label="fields.images.label"
              :value="presenter(record, 'images')"
            ></app-view-item-image> -->
            <app-view-item-image
              :value="presenter(record, 'images')"
            ></app-view-item-image>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BookViewToolbar from '@/modules/book/components/book-view-toolbar.vue';
import { BookModel } from '@/modules/book/book-model';
import { i18n } from '@/i18n';
import Categories from '@/security/categories';
import Topics from '@/security/topics';
import Types from '@/security/types';
import Locations from '@/security/locations';
import BookStatusTag from '@/modules/book/components/book-status-tag';

const { fields } = BookModel;

export default {
  name: 'app-book-view-page',

  props: ['id'],

  components: {
    [BookViewToolbar.name]: BookViewToolbar,
    [BookStatusTag.name]: BookStatusTag,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'book/view/record',
      loading: 'book/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'book/view/doFind',
    }),

    presenter(record, fieldName) {
      return BookModel.presenter(record, fieldName);
    },

    categoryLabelOf(categoryId) {
      return Categories.labelOf(categoryId);
    },

    topicLabelOf(topicId) {
      return Topics.labelOf(topicId);
    },

    typeLabelOf(typeId) {
      return Types.labelOf(typeId);
    },

    locationLabelOf(locationId) {
      return Locations.labelOf(locationId);
    },

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>
