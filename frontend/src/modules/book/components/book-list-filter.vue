<template>
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.isbn.label" :prop="fields.isbn.name">
          <el-input v-model="model[fields.isbn.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.title.label" :prop="fields.title.name">
          <el-input v-model="model[fields.title.name]" />
        </el-form-item>
      </el-col>
      
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.series.label" :prop="fields.series.name">
          <el-input v-model="model[fields.series.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.author.label" :prop="fields.author.name">
          <el-input v-model="model[fields.author.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.publishingCompany.label" :prop="fields.publishingCompany.name">
          <el-input v-model="model[fields.publishingCompany.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.status.label" :prop="fields.status.name">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">All</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.category.label" :prop="fields.category.name">
          <el-select placeholder v-model="model[fields.category.name]">
            <el-option :value="undefined">All</el-option>
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.category.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.topic.label" :prop="fields.topic.name">
          <el-select placeholder v-model="model[fields.topic.name]">
            <el-option :value="undefined">All</el-option>
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.topic.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.type.label" :prop="fields.type.name">
          <el-select placeholder v-model="model[fields.type.name]">
            <el-option :value="undefined">All</el-option>
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.type.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.location.label" :prop="fields.location.name">
          <el-select placeholder v-model="model[fields.location.name]">
            <el-option :value="undefined">All</el-option>
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.location.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

    </el-row>

    <div class="filter-buttons">
      <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { BookModel } from '@/modules/book/book-model';
import { i18n } from '@/i18n';

const { fields } = BookModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.isbn,
  fields.title,
  fields.series,
  fields.author,
  fields.publishingCompany,
  fields.status,
]);

export default {
  name: 'app-book-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'book/list/loading',
      filter: 'book/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'book/list/doReset',
      doFetch: 'book/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
</style>
