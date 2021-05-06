import axios from 'axios';

class SubcategorieService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async getAll(cId) {
    let response = await this.axios.get(`/category/${cId}/subcategories`)
    return response.data;
  }

  async getById(cId, sId) {
    let response = await this.axios.get(`/category/${cId}/subcategory/${sId}`)
    return response.data;
  }
  async getByIdNoCategory(sId) {
    let response = await this.axios.get(`/subcategory/${sId}`)
    return response.data;
  }

}

export default new SubcategorieService();