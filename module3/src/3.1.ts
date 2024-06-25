{
  //OOP class
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`what the ${this.species} doing?`);
    }
  }

  const dog = new Animal("muku", "dog", "ghew");
  dog.makeSound();
}
