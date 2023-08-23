class DataStorageService {
  /**
   * @param {string} path
   * @param {{id: number, name: string}} city 
   * @param {{id: number, name: string}} shop
   * @param {{id: number, name: string}} employee
   * @param {{id: number, name: string}} team
   * @param {{id: number, name: string}} shift  
   */
  save(path, city, shop, employee, team, shift) {
    setCookie(
      path, 
      JSON.stringify({city: city.name, shop: shop.name, employee: employee.name, team: team.name, shift: shift.name}),
      1
    );
  }
}
