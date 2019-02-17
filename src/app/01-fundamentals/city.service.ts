export class CityService {
    cities = ['nagpur', 'mumbai', 'pune', 'bengaluru', 'chennai', 'new delhi'];
  
    getCities() {
      return this.cities;
    }
  
    addCity(city: string) {
      this.cities.push(city);
    }
  }
  