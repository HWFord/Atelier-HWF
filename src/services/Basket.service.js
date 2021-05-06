import axios from 'axios';

class BasketService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async addToBasket(pId) {
    let response = await this.axios.put('/basketAdd', pId)
      .then(function (response) {
        console.log('Product added to basket')
        return response.data;
      });
  }

}

export default new BasketService();