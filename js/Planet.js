
export class Planet {

    constructor (planetName, rings, type, mass, gravity, appearance) {
        this.planetName = planetName;
        this.rings = rings;
        this.type = type;
        this.mass = mass;
        this.gravity = gravity;
        this.appearance = appearance;
    }

    calculateWeight (mass) {
        return mass * this.gravity;
    }

}