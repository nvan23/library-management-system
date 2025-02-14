<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column :prop="fields.images.name" align="center">
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'images')" class="book-image-list-item"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :label="fields.isbn.label" :prop="fields.isbn.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'isbn') }}</template>
      </el-table-column>

      <el-table-column :label="fields.title.label" :prop="fields.title.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'title') }}</template>
      </el-table-column>

      <el-table-column :label="fields.series.label" :prop="fields.series.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'series') }}</template>
      </el-table-column>

      <el-table-column :label="fields.author.label" :prop="fields.author.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'author') }}</template>
      </el-table-column>

      <el-table-column :label="fields.publishingCompany.label" :prop="fields.publishingCompany.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'publishingCompany') }}</template>
      </el-table-column>

      <el-table-column :label="fields.categories.label" :prop="fields.categories.name">
        <template slot-scope="scope">
          <div :key="categoryId" v-for="categoryId in scope.row.categories">
            <el-tooltip :content="categoryDescriptionOf(categoryId)">
              <span>{{ categoryLabelOf(categoryId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column :label="fields.topics.label" :prop="fields.topics.name">
        <template slot-scope="scope">
          <div :key="topicId" v-for="topicId in scope.row.topics">
            <el-tooltip :content="topicDescriptionOf(topicId)">
              <span>{{ topicLabelOf(topicId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column :label="fields.types.label" :prop="fields.types.name">
        <template slot-scope="scope">
          <div :key="typeId" v-for="typeId in scope.row.types">
            <el-tooltip :content="typeDescriptionOf(typeId)">
              <span>{{ typeLabelOf(typeId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column :label="fields.locations.label" :prop="fields.locations.name">
        <template slot-scope="scope">
          <div :key="locationId" v-for="locationId in scope.row.locations">
            <el-tooltip :content="locationDescriptionOf(locationId)">
              <span>{{ locationLabelOf(locationId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <!-- <el-table-column :label="fields.status.label" :prop="fields.status.name" sortable="custom"> -->
      <el-table-column :label="fields.status.label" :prop="fields.status.name">
        <template slot-scope="scope">
          <app-book-status-tag :value="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/book/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/book/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { BookModel } from '@/modules/book/book-model';
import { mapGetters, mapActions } from 'vuex';
import { BookPermissions } from '@/modules/book/book-permissions';
import { i18n } from '@/i18n';
import Categories from '@/security/categories';
import Topics from '@/security/topics';
import Types from '@/security/types';
import Locations from '@/security/locations';
import BookStatusTag from '@/modules/book/components/book-status-tag';

const { fields } = BookModel;

export default {
  name: 'app-book-list-table',

  components: {
    [BookStatusTag.name]: BookStatusTag,
  },

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'book/list/rows',
      count: 'book/list/count',
      loading: 'book/list/loading',
      pagination: 'book/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'book/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new BookPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new BookPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'book/list/doChangeSort',
      doChangePaginationCurrentPage:
        'book/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'book/list/doChangePaginationPageSize',
      doMountTable: 'book/list/doMountTable',
      doDestroy: 'book/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return BookModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
    
    categoryDescriptionOf(categoryId) {
      return Categories.descriptionOf(categoryId);
    },

    categoryLabelOf(categoryId) {
      return Categories.labelOf(categoryId);
    },

    topicDescriptionOf(topicId) {
      return Topics.descriptionOf(topicId);
    },

    topicLabelOf(topicId) {
      return Topics.labelOf(topicId);
    },

    typeDescriptionOf(typeId) {
      return Types.descriptionOf(typeId);
    },

    typeLabelOf(typeId) {
      return Types.labelOf(typeId);
    },

    locationDescriptionOf(locationId) {
      return Locations.descriptionOf(locationId);
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

<style>
.book-image-list-item {
  border-radius: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.book-image-list-item img {
  object-fit: cover;
}
</style>
