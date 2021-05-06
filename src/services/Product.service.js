import axios from 'axios';

class ProductService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async getAll(sId) {
    let response = await this.axios.get(`subcategory/${sId}/products`)
    return response.data;
  }

  async getById(pId) {
    let response = await this.axios.get(`/product/${pId}`)
    return response.data;
  }

}

export default new ProductService();