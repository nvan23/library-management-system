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
        <app-i18n code="entities.book.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.book.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.book.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.book.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        :model="model"
        :rules="rules"
        @submit.native.prevent="doSubmit"
        class="form"
        ref="form"
        v-if="model"
      >
        <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :disabled="true" v-model="model[fields.id.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.isbn.label"
          :prop="fields.isbn.name"
          :required="fields.isbn.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input ref="focus" v-model="model[fields.isbn.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.title.label"
          :prop="fields.title.name"
          :required="fields.title.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.title.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.series.label"
          :prop="fields.series.name"
          :required="fields.series.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.series.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.author.label"
          :prop="fields.author.name"
          :required="fields.author.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.author.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.publishingCompany.label"
          :prop="fields.publishingCompany.name"
          :required="fields.publishingCompany.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.publishingCompany.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.categoriesRequired.label"
          :prop="fields.categoriesRequired.name"
          :required="fields.categoriesRequired.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select multiple placeholder v-model="model[fields.categoriesRequired.name]">
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.categoriesRequired.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.topicsRequired.label"
          :prop="fields.topicsRequired.name"
          :required="fields.topicsRequired.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select multiple placeholder v-model="model[fields.topicsRequired.name]">
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.topicsRequired.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        
        <el-form-item
          :label="fields.typesRequired.label"
          :prop="fields.typesRequired.name"
          :required="fields.typesRequired.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select multiple placeholder v-model="model[fields.typesRequired.name]">
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.typesRequired.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.locationsRequired.label"
          :prop="fields.locationsRequired.name"
          :required="fields.locationsRequired.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select multiple placeholder v-model="model[fields.locationsRequired.name]">
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.locationsRequired.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <!-- <el-form-item
          :label="fields.loanPeriodInDays.label"
          :prop="fields.loanPeriodInDays.name"
          :required="fields.loanPeriodInDays.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number
              :presicion="0"
              :step="1"
              v-model="model[fields.loanPeriodInDays.name]"
            />
          </el-col>
        </el-form-item> -->

        <el-form-item
          :label="fields.numberOfCopies.label"
          :prop="fields.numberOfCopies.name"
          :required="fields.numberOfCopies.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input-number :precision="0" :step="1" v-model="model[fields.numberOfCopies.name]"></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.images.label"
          :prop="fields.images.name"
          :required="fields.images.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.images.max"
              :path="fields.images.path"
              :schema="fields.images.fileSchema"
              v-model="model[fields.images.name]"
            ></app-image-upload>
          </el-col>
        </el-form-item>

        <el-form-item>
          <div class="form-buttons">
            <el-button
              :disabled="saveLoading"
              @click="doSubmit"
              icon="el-icon-fa-floppy-o"
              type="primary"
            >
              <app-i18n code="common.save"></app-i18n>
            </el-button>

            <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
              <app-i18n code="common.reset"></app-i18n>
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { BookModel } from '@/modules/book/book-model';
import { i18n } from '@/i18n';

const { fields } = BookModel;
const formSchema = new FormSchema([
  fields.id,
  fields.isbn,
  fields.title,
  fields.author,
  fields.publishingCompany,
  fields.series,
  fields.categoriesRequired,
  fields.topicsRequired,
  fields.typesRequired,
  fields.locationsRequired,
  fields.numberOfCopies,
  // fields.loanPeriodInDays,
  fields.images,
]);

export default {
  name: 'app-book-form-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'book/form/record',
      findLoading: 'book/form/findLoading',
      saveLoading: 'book/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },

    fields() {
      return fields;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }

    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doFind: 'book/form/doFind',
      doNew: 'book/form/doNew',
      doUpdate: 'book/form/doUpdate',
      doCreate: 'book/form/doCreate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      if (this.isEditing) {
        return this.doUpdate({
          id,
          values,
        });
      } else {
        return this.doCreate(values);
      }
    },

    i18n(code) {
      return i18n(code);
    },
  },
};
</script>

<style>
</style>
