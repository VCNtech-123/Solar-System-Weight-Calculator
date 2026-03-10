
import { Planet } from './Planet.js';

let planets = [];
planets[0] = new Planet('Mercury', false, 'Terrestrial', '3.30x10^23', 3.70, 'assets/images/mercury.png');
planets[1] = new Planet('Venus', false, 'Terrestrial', '4.87x10^24', 8.87, 'assets/images/venus.png');
planets[2] = new Planet('Earth', false, 'Terrestrial', '5.97x10^24', 9.81, 'assets/images/earth.png');
planets[3] = new Planet('Mars', false, 'Terrestrial', '6.42x10^23', 3.71, 'assets/images/mars.png');
planets[4] = new Planet('Jupiter', true, 'Gas Giant', '1.90x10^27', 24.79, 'assets/images/jupiter.png');
planets[5] = new Planet('Saturn', true, 'Gas Giant', '5.68x10^26', 10.44, 'assets/images/saturn.png');
planets[6] = new Planet('Uranus', true, 'Ice Giant', '8.68x10^25', 8.69, 'assets/images/uranus.png');
planets[7] = new Planet('Neptune', true, 'Ice Giant', '1.02x10^26', 11.15, 'assets/images/neptune.png');


const kgInput = document.getElementById('kgInput');
const dropdown = document.getElementById('dropdown');
const calBtn = document.getElementById('calBtn');
const content = document.querySelector('.content');

calBtn.addEventListener('click', () => {
    content.innerHTML = '';

    const mass = Number(kgInput.value);
    showInfo(mass);
    
})

const showInfo = (mass) => {
    const planet = planets[Number(dropdown.value)];
    content.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';

    const planetAppearance = document.createElement('img');
    planetAppearance.src = planet.appearance;
    planetAppearance.style.width = '40%';
    content.appendChild(planetAppearance);

    const contentInfo = document.createElement('div');
    contentInfo.classList.add('contentInfo');
    contentInfo.style.display = 'flex';
    contentInfo.style.flexDirection = 'column';
    contentInfo.style.gap = '10px';
    content.appendChild(contentInfo);

    const planetName = document.createElement('h1');
    planetName.textContent = planet.planetName;
    contentInfo.appendChild(planetName);
    planetName.style.color = 'white';

    const planetType = document.createElement('p');
    planetType.textContent = 'Type: ' + planet.type;
    contentInfo.appendChild(planetType);

    const hasRing = document.createElement('p');
    const ring = planet.rings ? 'Yes' : 'No';
    hasRing.textContent = 'Rings: ' + ring
    contentInfo.appendChild(hasRing);

    const planetMass = document.createElement('p');
    planetMass.textContent = 'Mass: ' + planet.mass   ;
    contentInfo.appendChild(planetMass);

    const planetGravity = document.createElement('p');
    planetGravity.textContent = 'Gravity: ' + planet.mass;
    contentInfo.appendChild(planetGravity);

    const massContent = document.createElement('div');
    contentInfo.appendChild(massContent);
    massContent.style.display = 'flex';
    massContent.style.width = '40rem';
    massContent.style.height = '150px';
    massContent.style.justifyContent = 'center';
    massContent.style.alignItems = 'center';
    massContent.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    massContent.style.flexDirection = 'column';
    massContent.style.gap = '20px';
    massContent.style.padding = '20px';
    massContent.style.marginTop = '50px';

    const objectMass = document.createElement('p');
    objectMass.textContent = 'Your Weight is: ';
    objectMass.style.alignItems = 'center';
    massContent.appendChild(objectMass);

    const roundMass = document.createElement('p');
    roundMass.textContent = planet.calculateWeight(mass) + 'N';
    roundMass.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    roundMass.style.display = 'flex';
    roundMass.style.alignItems = 'center';
    roundMass.style.justifyContent = 'center';
    roundMass.style.borderRadius = '50%';
    roundMass.style.width = 'auto';
    roundMass.style.height = 'auto';
    roundMass.style.padding = '40px';
    massContent.appendChild(roundMass);

    const allP = document.querySelectorAll('p');
    allP.forEach((p) => {
        p.style.color = 'white';
        p.style.fontFamily = 'Arial, sans-serif'
        p.style.fontSize = '20px';
        p.style.margin = '0px';
    })

}