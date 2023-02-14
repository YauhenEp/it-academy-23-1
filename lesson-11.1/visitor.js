class Car {
    accept(visitor) {
      visitor(this);
    }
  }
  
  class Tesla extends Car {
    info() {
      return 'It is a Tesla car!';
    }
  }
  
  class Bmw extends Car {
    info() {
      return 'It is a BMW car!';
    }
  }
  
  class Audi extends Car {
    info() {
      return 'It is an Audi car!';
    }
  }
  
  function exportVisitor(auto) {
      if (auto instanceof Tesla)
        auto.export = console.log(`Exported data: ${auto.info()}`);
      if (auto instanceof Bmw)
        auto.export = console.log(`Exported data: ${auto.info()}`);
      if (auto instanceof Audi)
        auto.export = console.log(`Exported data: ${auto.info()}`);
  };

  const tesla = new Tesla();
  const bmw = new Bmw();
  const audi = new Audi();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
audi.accept(exportVisitor);

console.log(tesla)
console.log(bmw)
console.log(audi)