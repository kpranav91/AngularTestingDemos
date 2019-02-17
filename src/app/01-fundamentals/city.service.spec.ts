import { CityService } from "./city.service";

describe('city service suite', ()=>{

    let cityService : CityService;

    beforeEach(() =>{
        //set up
        cityService = new CityService();
    });

    afterEach(()=>{
        //tear down
        cityService = null;
    });

    it('it should match specified city present in cities Array', ()=>{
        let cities = cityService.getCities();

        expect(cities).toContain('mumbai');
        expect(cities).toContain('nagpur');
    });

    it('it should add specified city to cities array', ()=>{
        //Arrange 
        const newCity = 'aurangabad';

        //Act
        cityService.addCity(newCity);

        //Assert
        expect(cityService.getCities()).toContain(newCity);
    });

})