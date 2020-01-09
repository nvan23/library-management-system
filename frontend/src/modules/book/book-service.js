import authAxios from '@/shared/axios/auth-axios';

export class BookService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/book/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/book`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/book`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const response = await authAxios.post(
      `/book/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/book/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/book`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const response = await authAxios.get(
      `/book/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }

  static async fetchCategories(filter, orderBy) {
    const params = {
      filter,
      orderBy,
    };

    const response = await authAxios.get(`/book/category`, {
      params,
    });

    return {
      rows: response.data,
      count: response.data.length,
    };
  }

  static async fetchTopics(filter, orderBy) {
    const params = {
      filter,
      orderBy,
    };

    const response = await authAxios.get(`/book/topic`, {
      params,
    });

    return {
      rows: response.data,
      count: response.data.length,
    };
  }

}
