const carMarket = {
  // ------------------------------- Sellers Getters
  getAgencyById: (agencyId) =>
    carMarket.sellers.find((item) => item.agencyId == agencyId),
  getAgencyByName: (agencyName) =>
    carMarket.sellers.find((item) => item.agencyName == agencyName),
  getAgencyIdByName: (agencyName) =>
    carMarket.sellers.find((item) => item.agencyName == agencyName).agencyId,
  getAllAgenciesName: () => carMarket.sellers.map((item) => item.agencyName),
  getAllCarToBuy: () => carMarket.sellers.map((item) => item.cars),
  getAllCarToBuyByAgencyId: (agencyId) =>
    carMarket.sellers
      .find((item) => item.agencyId == agencyId)
      .cars.map((item) => item.models),
  getAllBrandsToBuyAgencyId: (agencyId) =>
    carMarket.getAgencyById(agencyId).cars.map((item) => item.brand),

  // ------------------------------- Sellers Setters

  setPropertyBrandToAllCars: function () {
    carMarket.sellers.forEach((item) => {
      item.cars.forEach((m) => {
        m.models.forEach((car) => (car.barnd = m.brand));
      });
    });
  },
  setNewCarToAgency: (agencyId, newCar) => {
    // let agencyCars = carMarket.getAgencyById(agencyId).cars;
    // let carBrand = agencyCars.find((model) => model.brand == newCar.barnd);
    // carBrand.models.push(newCar);
    // lersion 2

    carMarket.sellers.forEach((seller) => {
      if (seller.agencyId === agencyId) {
        seller.cars.forEach((item) => {
          if (item.brand === newCar.brand) {
            item.models.push(newCar);
            console.log("new car added to " + newCar.brand);
          }
        });
      }
    });
  },
  deleteCarFromAgency: function (agencyId, carNumber) {
    carMarket.sellers.forEach((seller) => {
      if (seller.agencyId === agencyId) {
        seller.cars.forEach((brand) => {
          brand.models = brand.models.filter(
            (car) => car.carNumber != carNumber
          );

          // console.log(brand.models);
        });
      }
    });
  },
  decrementOrIncrementCashOfAgency: (agencyId, amount) => {
    let agancyCash;
    carMarket.sellers.forEach((item) => {
      if (item.agencyId === agencyId) {
        if (item.cash > 0) {
          item.cash += amount;
          agancyCash = item.cash;
        }
      }
    });
    return agancyCash;
  },
  decrementOrIncrementCreditOfAgency: (agencyId, amount) => {
    let agencyCredit;
    carMarket.sellers.forEach((item) => {
      if (item.agencyId === agencyId) {
        item.credit += amount;
        agencyCredit = item.credit;
      }
    });
    return agencyCredit;
  },
  setAmountOfCarsToBuyToAllAgencys: function () {
    carMarket.sellers.forEach((item) => {
      let amountOfCars = item.cars.reduce((total, item) => {
        return total + item.models.length;
      }, 0);

      item["amountOfCars"] = amountOfCars;
    });
  },
  // ------------------------------- Customers Getters
  getCustomerById: (customerId) =>
    carMarket.customers.find((item) => item.id == customerId),
  getCustomerByName: (customerName) =>
    carMarket.customers.find((item) => item.name == customerName),
  getCustomerIdByName: (customerName) =>
    carMarket.getCustomerByName(customerName).id,
  getAllCustomersNames: () => carMarket.customers.map((item) => item.name),
  getAllCustomerCars: (customerId) => carMarket.getCustomerBy(customerId).cars,
  getCustomerCash: (customerId) => carMarket.getCustomerBy(customerId).cash,
  // ------------------------------- Customers Setters

  setCarToCostumer: (customerId, car) => {
    carMarket.customers.forEach((item) => {
      if (item.id === customerId) {
        item.cars.push(car);
      }
    });
  },
  deleteCarOfCostumer: (customerId, carNumber) => {
    let result = {};

    if (!carMarket.customers.some((item) => item.id == customerId)) {
      console.log("customer not found");
      return result;
    }

    carMarket.customers.forEach((item) => {
      if (item.id === customerId) {
        const exist = item.cars.some((item) => item.carNumber == carNumber);
        if (exist) {
          item.cars = item.cars.filter((item) => item.carNumber != carNumber);
          result = item.cars;
          return;
        }
        console.log("wrong carNumber");
        return;
      }
    });
    return result;
  },
  decrementOrIncrementCashOfCostumer: (customerId, mony) => {
    const customerExist = carMarket.customers.some(
      (item) => item.id == customerId
    );
    if (!customerExist) {
      console.log("customer not found");
      return;
    }
    let result;
    carMarket.customers.forEach((item) => {
      if (item.id === customerId) {
        if (item.cash > 0) {
          item.cash += mony;
          result = item.cash;
          return;
        }
      }
    });

    return result;
  },

  sellers: [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ4",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2020,
              price: 336300,
              carNumber: "6rvXw",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Hilux",
              year: 2005,
              price: 35005,
              carNumber: "MWXBG",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Corolla",
              year: 2020,
              price: 111900,
              carNumber: "hCzl-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Focus",
              year: 2020,
              price: 98200,
              carNumber: "kN3HP",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Focus",
              year: 2005,
              price: 6502,
              carNumber: "LJTCs",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Romeo Julia",
              year: 2020,
              price: 275406,
              carNumber: "2kjy7",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Romeo Stelvio",
              year: 2019,
              price: 215403,
              carNumber: "7A5b-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Traverse",
              year: 2020,
              price: 201102,
              carNumber: "QwBOT",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Impala",
              year: 2019,
              price: 165041,
              carNumber: "2v4jt",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Malibu",
              year: 2017,
              price: 75405,
              carNumber: "O4_Jv",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
      ],
    },
    {
      agencyName: "CarMax",
      cash: 968541,
      credit: 500000,
      agencyId: "26_IPfHU1",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X5",
              year: 2015,
              price: 218000,
              carNumber: "4Ixb0",
              ownerId: "26_IPfHU1",
            },
            {
              name: "X6",
              year: 2014,
              price: 97100,
              carNumber: "kAnv-",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Z4",
              year: 2019,
              price: 296900,
              carNumber: "ISMdU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "3",
              year: 2010,
              price: 75100,
              carNumber: "9DJPw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2005,
              price: 80540,
              carNumber: "Kt-pW",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Corolla",
              year: 2019,
              price: 109100,
              carNumber: "YiYdI",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Hilux",
              year: 2019,
              price: 204000,
              carNumber: "DRmNw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "F250",
              year: 2020,
              price: 198500,
              carNumber: "g4Wfp",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Explorer",
              year: 2020,
              price: 265200,
              carNumber: "iNT8Q",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Spider",
              year: 2011,
              price: 75405,
              carNumber: "6t7QU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "166",
              year: 2002,
              price: 12400,
              carNumber: "XMqpn",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2016,
              price: 65042,
              carNumber: "vbeAo",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Savannah",
              year: 2016,
              price: 76505,
              carNumber: "WelWa",
              ownerId: "26_IPfHU1",
            },
          ],
        },
      ],
    },
    {
      agencyName: "The Auto World",
      cash: 687450,
      credit: 200000,
      agencyId: "gNHjNFL12",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X6",
              year: 2018,
              price: 548100,
              carNumber: "EMW_7",
              ownerId: "gNHjNFL12",
            },
            {
              name: "3",
              year: 2017,
              price: 178000,
              carNumber: "XlnB4",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2017,
              price: 101542,
              carNumber: "-RQgN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Highlander",
              year: 2017,
              price: 202540,
              carNumber: "AZJZ4",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 1996,
              price: 5420,
              carNumber: "kHE8f",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 2012,
              price: 40570,
              carNumber: "p2qEi",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Explorer",
              year: 2014,
              price: 127502,
              carNumber: "Ty1zN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "F350",
              year: 2012,
              price: 54250,
              carNumber: "z03H2",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Savannah",
              year: 2010,
              price: 36504,
              carNumber: "RXFZe",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Malibu",
              year: 2009,
              price: 19585,
              carNumber: "K5IsM",
              ownerId: "gNHjNFL12",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Car Werks",
      cash: 302502,
      credit: 150000,
      agencyId: "9KeaYbRLP",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "8",
              year: 2020,
              price: 942500,
              carNumber: "4IUMz",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X6",
              year: 2010,
              price: 129000,
              carNumber: "Vw0fV",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X3",
              year: 2019,
              price: 358100,
              carNumber: "ufN54",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2020,
              price: 389100,
              carNumber: "F127X",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2002,
              price: 18400,
              carNumber: "ueZUp",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2011,
              price: 38520,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Land Cruiser",
              year: 2019,
              price: 290040,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2020,
              price: 215700,
              carNumber: "xig8N",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2015,
              price: 178506,
              carNumber: "ghTiQ",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Corolla",
              year: 2002,
              price: 8504,
              carNumber: "Mvw8T",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2005,
              price: 9320,
              carNumber: "BZpkt",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Malibu",
              year: 2002,
              price: 4502,
              carNumber: "KqKV_",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Carsova",
      cash: 72450,
      credit: 50000,
      agencyId: "oqQmsZoUo",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "7",
              year: 1999,
              price: 24700,
              carNumber: "sZrjp",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "3",
              year: 2008,
              price: 54000,
              carNumber: "da88K",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2019,
              price: 124050,
              carNumber: "ZfbqH",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "Hilux",
              year: 1996,
              price: 11540,
              carNumber: "AZJZ4",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
      ],
    },
  ],
  customers: [
    {
      name: "Lilah Goulding",
      id: "BGzHhjnE8",
      cars: [
        {
          name: "Corolla",
          year: 2013,
          price: 40570,
          carNumber: "16da1",
          ownerId: "BGzHhjnE8",
        },
      ],
      cash: 35000,
    },
    {
      name: "Ravi Murillo",
      id: "2RprZ1dbL",
      cars: [
        {
          name: "M5",
          year: 2019,
          price: 578054,
          carNumber: "WIh0U",
          ownerId: "2RprZ1dbL",
        },
        {
          name: "Spider",
          year: 2012,
          price: 81520,
          carNumber: "RLS4q",
          ownerId: "2RprZ1dbL",
        },
      ],
      cash: 278542,
    },
    {
      name: "Aleksander Carr",
      id: "pAuFtn_WA",
      cars: [
        {
          name: "Highlander",
          year: 2018,
          price: 214503,
          carNumber: "2WU_y",
          ownerId: "pAuFtn_WA",
        },
      ],
      cash: 125402,
    },
    {
      name: "Lana Edge",
      id: "cnTobUDy6",
      cars: [
        {
          name: "F250",
          year: 2020,
          price: 198500,
          carNumber: "Xxcy_",
          ownerId: "cnTobUDy6",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "VSCUj",
          ownerId: "cnTobUDy6",
        },
      ],
      cash: 7000,
    },
    {
      name: "Nikita Philip",
      id: "5x2tMcX4R",
      cars: [
        {
          name: "Impala",
          year: 2016,
          price: 65042,
          carNumber: "LKInp",
          ownerId: "5x2tMcX4R",
        },
      ],
      cash: 40541,
    },
    {
      name: "Bob Steel",
      id: "Wm6BkA1F0",
      cars: [],
      cash: 15732,
    },
    {
      name: "Will Reyes",
      id: "FQvNsEwLZ",
      cars: [
        { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "vaJvd",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "qLoYR",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Explorer",
          year: 2020,
          price: 265200,
          carNumber: "tlGRq",
          ownerId: "FQvNsEwLZ",
        },
      ],
      cash: 1547242,
    },
  ],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },
};

module.exports = carMarket;

// ---------------------------------------------------------------------- Agency Getters

//#region Agency Getters

//! agency's func's
//todo getters

//---------------------------------------------------------1
// console.log(carMarket.getAgencyByName("Best Deal"));

//* getAgencyByName
//? @param {string} - name
//? @return {Object} - agency object

//-----------------------------------------------------2
// console.log(carMarket.getAgencyIdByName("Best Deal"));

//* getAgencyIdByName
//? @param {String} - name
//? @return {String} - agencyId

//---------------------------------------------------------3
// console.log(carMarket.getAllAgenciesName());

//* getAllAgenciesName
//? @param {}
//? @return {string[]} - agenciesNameArr - Array of all agencies name

//-----------------------------------------------------------------------4
// console.log(carMarket.getAllCarToBuy());

//* getAllCarToBuy
//? @param {}
//? @return {object[]} - allCarsToBuy - arrays of all cars objects

//------------------------------------------------------------------------------------5
// console.log(carMarket.getAllCarToBuyByAgencyId("Plyq5M5AZ"));

//* getAllCarToBuyByAgencyId
//? @param {string} - id of agency
//? @return {object[]} - carsArray - arrays of all models objects of specific agency

//------------------------------------------------------------------------------------------6
// console.log(carMarket.getAllBrandsToBuyAgencyId("Plyq5M5AZ"));

//* getAllBrandsToBuyAgencyId
//? @param {string} - agencyId -  id of agency
// ? @return {string[]} - arrOfBrands - arrays of all brands name in specific agency

//#endregion   Agency Getters

// ---------------------------------------------------------------------- Customers Getters

//#region Customers Getters

//----------------------------------------------------------------------------7
// console.log(carMarket.getCustomerByName("Lilah Goulding"));

//! customer func's
//todo getters
//* getCustomerByName
//? @param {string} - name
//? @return {Object} - customer

//-----------------------------------------------------------------------------------------------8
// console.log(carMarket.getCustomerIdByName("Lilah Goulding"));

//* getCustomerIdByName
//? @param {name}
//? @return {String} - customerId - The customer id

//--------------------------------------------------------------------------------------------------9
// console.log(carMarket.getAllCustomersNames());

//* getAllCustomersNames
//? @param {}
//? @return {string[]} - customersNameArr -  Array of all customers name

//---------------------------------------------------------------------------------------------------------10
// console.log(carMarket.getAllCustomerCars("2RprZ1dbL"));

//* getAllCustomerCars
//? @param {id} - costumerId - costumer id
//? @return {object[]} - customerCarsArr -  Array of all customer cars object

//-----------------------------------------------------------------------------------------------------------11
// console.log(carMarket.getCustomerCash("2RprZ1dbL"));

//* getCustomerCash
//? @param {id} - costumerId - costumer id
//? @return {number} - CustomerCash

//#endregion  Customers Getters

// ---------------------------------------------------------------------- Agency Setters

//#region Agency Setters

// ---------------------------------------1
// carMarket.setPropertyBrandToAllCars();
// const cars = carMarket.sellers.map((i) => i.cars);
// cars.forEach((i) => {
//   i.forEach((x) => console.log(x));
// });

//*  1) setPropertyBrandToAllCars
//? set all cars model object the current brand
//? @param {}
//? @return {}

// ---------------------------------------2

// carMarket.setNewCarToAgency("26_IPfHU1", {
//   name: "Ziga",
//   year: 2022,
//   price: 237000,
//   carNumber: "DZ32Z4",
//   ownerId: "26_IPfHU1",
//   brand: "toyota",
// });

//* setNewCarToAgency
//? @param {string} - id of agency
//? @param {object} - carObject
//? @return {}

// ---------------------------------------3
// carMarket.deleteCarFromAgency("Plyq5M5AZ", "O4_Jv");

//* deleteCarFromAgency
//? @param {string} - id of agency
//? @param {string} -  Car id
// ? @return {}

// ---------------------------------------4
// const x = carMarket.decrementOrIncrementCashOfAgency("Plyq5M5AZ", 1200000);
// console.log(x);

//* decrementOrIncrementCashOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

// ---------------------------------------5

// const x = carMarket.decrementOrIncrementCreditOfAgency("Plyq5M5AZ", -112000000);
// console.log(x);

//* decrementOrIncrementCreditOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

// ---------------------------------------6
// carMarket.setAmountOfCarsToBuyToAllAgencys();
// console.log(carMarket.sellers);

//* setAmountOfCarsToBuyToAllAgency's
//? set a new property amountOfCars to all agency's, that represent the amount of cars available in the agency.
//? @param {}
// ? @return {objects[]} - sellers - array of all agency's

//#endregion Agency Setters

// ---------------------------------------------------------------------- Customers Setters

//#region Customers Setters

//----------------------------------1
// carMarket.setCarToCostumer("2RprZ1dbL", {
//   name: "3",
//   year: 2015,
//   price: 137000,
//   carNumber: "AZJZ4",
//   ownerId: "2RprZ1dbL",
// });
// console.log(carMarket.getCustomerById("2RprZ1dbL"));

//* setCarToCostumer
//? @param {string} - costumerId
//? @param {object} - carObject
//? @return {object[]} - allCarsOfCostumer

//---------------------------------------2

// console.log(carMarket.deleteCarOfCostumer("2RprZ1dbL", "WIh0U"));

//* deleteCarOfCostumer
//? @param {string} - costumerId
//? @param {string} - carId
//? @return {object[]} - allCarsOfCostumer

//-------------------------------------------3
// let res = carMarket.decrementOrIncrementCashOfCostumer("2RprZ1dbL", 0);
// console.log(res);

//* decrementOrIncrementCashOfCostumer
//? @param {string} - costumerId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - costumerCash

// #endregion Customers Setters

//! -------------------------------------------------------            Sorting & Filtering
//* 2) sortAndFilterByYearOfProduction
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by year of production.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

//* 3) sortAndFilterByPrice
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by price of the cars.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromPrice - Will display vehicles starting at this price
//?   @param {number} - fromPrice - Will display vehicles up to this price
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

//* 4 ) searchCar
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {number} - fromPrice - Will display vehicles starting at this price
//?   @param {number} - fromPrice - Will display vehicles up to this price
//?   optional @param {string} - brand - Look only for cars of this brand

//* 5 ) sellCar
//?   Sell ​​a car to a specific customer
//?   @param {string} - agencyId
//?   @param {string} - customerId
//?   @param {string} - carModel
//?   @return {object} - The object of the car purchased by the customer or an explanation message
// *     - 5a. Subtract the vehicle amount + 17% (tax) from the customer's cash.
// *     - 5b. Add the vehicle value to the car agency cash.
// *     - 5c. Change the car owner's id to the customer's id.
// *     - 5d. Remove the car from the array of the agency's car models.
// *     - 5e. Add the car to the client cars array.
// *
// *     Taxes Authority:
// *     - 5f. Pay 17 percent of the vehicle value to the tax authority. (add the amount to totalTaxesPaid)
// *     - 5g. Increase the number of transactions made in one (numberOfTransactions)
// *     - 5h. Add the vehicle amount + tax to sumOfAllTransactions
// !     - Check that there is the requested vehicle at the agency in not return 'The vehicle does not exist at the agency'
// !     - Check that the customer has enough money to purchase the vehicle, if not return 'The customer does not have enough money'

//!      - Try to divide the tasks into several functions and try to maintain a readable language.
