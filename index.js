/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  // Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>
  this.toString = function () {
    return this.brand + " " + this.model + ", " + this.year;
  };
}
// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.
Vehicle.valueOf = function () {
  return this.mileage;
};
let propV = {
  brand: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Audi",
  },
  model: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "A6",
  },
  year: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2018,
  },
  mileage: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 30000,
  },
};

let strV;
let newV;
newV = Object.create(Vehicle, propV);
console.log(newV);
console.log(Number(newV));
console.log("-Vehicle end--");

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  [brand, model, year, mileage] = Vehicle.apply(this, [
    brand,
    model,
    year,
    mileage,
  ]);
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  this.fuelType = fuelType;
  this.speed = speed;

  // Ми можемо перевизначити методи з Vehicle в Car.

  // Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.
  Car.toString = function () {
    return (
      this.brand + " " + this.model + " " + this.year + " - " + this.fuelType
    );
  };
  // Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год
  Car.accelerate = function (speedPlus) {
    this.speed += speedPlus;
    return (
      "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " прискорився до швидкості " +
      this.speed +
      " км/год"
    );
  };
  // Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год
  Car.brake = function (speedMinus) {
    this.speed -= speedMinus;
    return (
      "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " зменшив до швидкості " +
      this.speed +
      " км/год"
    );
  };
  // Створюємо новий екземпляр об'єкта Car
  /*
   * Екземпляр об'єкту: Car
   * Властивості:
   * --------------------------------------
   * | Властивість  |  Значення           |
   * |--------------|---------------------|
   * | brand        |  "Audi"             |
   * | model        |  "A6"               |
   * | year         |  2018               |
   * | mileage      |  30000              |
   * | fuelType     |  "Petrol"           |
   * | speed        |  0                  |
   */
  let propCar = {
    brand: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Audi",
    },
    model: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "A6",
    },
    year: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2018,
    },
    mileage: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 30000,
    },
    fuelType: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Petrol",
    },
    speed: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0,
    },
  };
  let newCar = Object.create(Car, propCar);
  // Викличемо функції toString та valueOf об'єкта car
  console.log(newCar);
  console.log("toString=" + newCar.toString());
  console.log("valueOf=" + newCar.valueOf());
  console.log("valueOf=" + Number(newV));
  // Використовуємо методи для прискорення та передаємо 50
  console.log(newCar.accelerate(50));
  // Використовуємо методи для гальмування та передаємо 20
  console.log(newCar.brake(20));
  console.log("-Car end--");
  /*
   * Функція конструктор Truck
   * Властивості:
   * --------------------
   * | Властивість      |
   * |------------------|
   * | brand            |
   * | model            |
   * | year             |
   * | mileage          |
   * | color            |
   * | engineType       |
   * | towingCapacity   |
   * | fuelType         |
   * | transmissionType |
   * | doors            |
   * | weight           |
   */

  // Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
  function Truck(
    brand,
    model,
    year,
    mileage,
    color,
    engineType,
    towingCapacity,
    fuelType,
    transmissionType,
    doors,
    weight
  ) {
    // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
    [brand, model, year, mileage] = Vehicle.call(
      this,
      brand,
      model,
      year,
      mileage
    );
    //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
    this.color = color;
    this.engineType = engineType;
  }

  // Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
  Truck.tow = function (capacity) {
    if (capacity > this.towingCapacity)
      return "Навантаження занадто важке для буксирування";
    else return "Тягнення навантаження...";
  };
  // Створюємо новий екземпляр об'єкта Truck
  /*
   * Екземпляр об'єкту: myTruck
   * Властивості:
   * ---------------------------------------------------
   * | Властивість      | Значення                     |
   * |------------------|------------------------------|
   * | brand            | "Toyota"                     |
   * | model            | "Tundra"                     |
   * | year             | 2019                         |
   * | mileage          | 20000                        |
   * | color            | "Red"                        |
   * | engineType       | "V8"                         |
   * | towingCapacity   | 10000                        |
   * | fuelType         | "Gasoline"                   |
   * | transmissionType | "Automatic"                  |
   * | doors            | 4                            |
   * | weight           | 5600                         |
   */
  let propTruck = {
    brand: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Toyota",
    },
    model: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Tundra",
    },
    year: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2019,
    },
    mileage: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 20000,
    },
    color: {
      value: "Red",
    },
    engineType: {
      value: "V8",
    },
    towingCapacity: {
      value: 10000,
    },
    fuelType: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Gasoline",
    },
    transmissionType: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Automatic",
    },
    doors: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4,
    },
    weight: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 5600,
    },
  };

  let newTruck = Object.create(Truck, propTruck);
  // Викликаємо метод tow з вагою меншою за towingCapacity
  console.log(newTruck.tow(9000));
  // Викликаємо метод tow з вагою більшою за towingCapacity
  console.log(newTruck.tow(10001));
  // Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
  Car.drive = function (newKm) {
    this.mileage += newKm;
    return (
      "Подорожуємо " +
      this.mileage +
      " кілометрів у " +
      this.brand +
      " " +
      this.model
    );
  };
  // Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
  const boundDrive = Car.drive.bind(newTruck);
  // Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
  // Викликаємо функцію зі значенням 100,
  const result = boundDrive(100);
  console.log(result);
  console.log("-Truck end--");
  /*
   * Функція конструктор: ElectricCar
   * Властивості:
   * --------------------------------------
   * | Властивість   |
   * |---------------|
   * | brand         |
   * | model         |
   * | year          |
   * | mileage       |
   * | batteryCapacity|
   */

  function ElectricCar(brand, model, year, mileage, batteryCapacity) {
    // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
    if (!new.target) {
      console.log("Конструктор має бути викликаний з 'new'");
      return "Конструктор має бути викликаний з 'new'";
    }
    // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
    //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
    this.batteryCapacity = batteryCapacity;
  }
  // Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
  ElectricCar.toString = function () {
    return (
      this.brand +
      " " +
      this.model +
      " " +
      this.year +
      " - Батарея: " +
      this.batteryCapacity +
      " kWh"
    );
  };
  // Створюємо новий екземпляр ElectricCar
  /*
   * Екземпляр об'єкту: ElectricCar
   * Властивості:
   * --------------------------------------
   * | Властивість     | Значення          |
   * |-----------------|-------------------|
   * | brand           | Tesla             |
   * | model           | Model S           |
   * | year            | 2020              |
   * | mileage         | 10000             |
   * | batteryCapacity | 100               |
   */
  let propElectricCar = {
    brand: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Tesla",
    },
    model: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Model S",
    },
    year: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2020,
    },
    mileage: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 10000,
    },
    batteryCapacity: {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 100,
    },
  };
  let newElectricCar = Object.create(ElectricCar, propElectricCar);
  // Викликаємо метод toString об'єкту tesla та виводимо в консоль
  console.log(newElectricCar);
  console.log("-ElectricCar end--");
  ElectricCar();
}
