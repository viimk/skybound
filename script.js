function openPlanetModal(title, content) {
  document.getElementById('planetModalTitle').innerHTML = title;
  document.getElementById('planetModalContent').innerHTML = content;

  let modal = new bootstrap.Modal(document.getElementById('planetModal'));
  modal.show();
}



//Sun
const sunInfo = `
<h2>☀ The Sun: Our Star</h2>
<p>The Sun is the central star of the solar system and the primary source of light and energy for Earth and other planets. It is a nearly perfect sphere of hot plasma undergoing nuclear fusion, which sustains life on Earth and drives the dynamics of the solar system.</p>

<ul>
    <li><strong>Average distance from Earth:</strong> Approximately 149.6 million km (1 AU)</li>
    <li><strong>Diameter:</strong> About 1,392,700 km</li>
    <li><strong>Mass:</strong> About 333,000 times the mass of Earth</li>
    <li><strong>Surface temperature:</strong> Around 5,500°C (photosphere)</li>
    <li><strong>Core temperature:</strong> Approximately 15 million°C</li>
    <li><strong>Composition:</strong> About 74% hydrogen, 24% helium, and trace elements</li>
    <li><strong>Type:</strong> G-type main-sequence star (G2V)</li>
    <li><strong>Age:</strong> Approximately 4.6 billion years</li>
    <li><strong>Energy source:</strong> Nuclear fusion converting hydrogen into helium</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>The Sun accounts for about 99.8% of the total mass of the solar system.</li>
    <li>Its energy output drives Earth’s climate and weather systems.</li>
    <li>Solar activity, such as sunspots and solar flares, can affect space weather and communication systems on Earth.</li>
    <li>The Sun will eventually evolve into a red giant and later become a white dwarf over billions of years.</li>
</ul>

<p><em>The Sun is essential for life on Earth and remains a key focus of astronomical research to understand stellar evolution and solar-terrestrial interactions.</em></p>
`;


//Meercury
const mercuryInfo = `
<h2>☿ Mercury: The Swift Planet</h2>
<p>Mercury is the smallest planet in the solar system and the closest to the Sun. It has a rocky surface and experiences extreme temperature variations due to its thin atmosphere and proximity to the Sun.</p>
<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 57.9 million km (0.39 AU)</li>
    <li><strong>Diameter:</strong> About 4,879 km</li>
    <li><strong>Length of a day:</strong> 58.6 Earth days</li>
    <li><strong>Length of a year:</strong> 88 Earth days</li>
    <li><strong>Surface temperature range:</strong> –173°C to 427°C</li>
    <li><strong>Atmosphere:</strong> Extremely thin, composed mainly of oxygen, sodium, and hydrogen</li>
    <li><strong>Moons:</strong> None</li>
    <li><strong>Gravity:</strong> About 38% of Earth's gravity</li>
    <li><strong>Unique feature:</strong> Largest day-night temperature difference among all planets</li>
</ul>
<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Mercury has no significant atmosphere to retain heat, resulting in extreme temperature fluctuations.</li>
    <li>The planet’s surface is heavily cratered, resembling the Moon.</li>
    <li>Despite being closest to the Sun, Mercury is not the hottest planet; Venus holds that distinction due to its dense atmosphere.</li>
    <li>Mercury’s orbit is highly elliptical, and it completes three rotations for every two orbits around the Sun.</li>
</ul>
<p><em>Mercury’s harsh environment and lack of atmosphere make it an unlikely candidate for human exploration beyond robotic missions.</em></p>
`;

//Venus
const venusInfo = `
<h2>♀ Venus: Earth's Twin</h2>
<p>Venus is the second planet from the Sun and is often called Earth's twin due to its similar size and composition. However, its environment is extremely hostile, with high temperatures and a dense atmosphere rich in carbon dioxide.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 108.2 million km (0.72 AU)</li>
    <li><strong>Diameter:</strong> About 12,104 km</li>
    <li><strong>Length of a day:</strong> 243 Earth days (longer than its year)</li>
    <li><strong>Length of a year:</strong> 225 Earth days</li>
    <li><strong>Surface temperature:</strong> Around 465°C</li>
    <li><strong>Atmosphere:</strong> Dense, primarily carbon dioxide with clouds of sulfuric acid</li>
    <li><strong>Moons:</strong> None</li>
    <li><strong>Gravity:</strong> About 90% of Earth's gravity</li>
    <li><strong>Unique feature:</strong> Rotates in the opposite direction to most planets (retrograde rotation)</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Venus is the hottest planet in the solar system due to its thick atmosphere and runaway greenhouse effect.</li>
    <li>The planet’s surface pressure is about 92 times that of Earth, equivalent to being nearly 1 km underwater.</li>
    <li>Venus has no liquid water and experiences constant volcanic activity.</li>
    <li>Its thick clouds reflect sunlight, making Venus one of the brightest objects in the night sky.</li>
</ul>

<p><em>Venus presents significant challenges for exploration due to its extreme heat, pressure, and corrosive atmosphere.</em></p>
`;


// Mars
const marsInfo = `
<h2>🌌 Mars: The Red Planet</h2>
<p>Mars is the fourth planet from the Sun and is often referred to as the "Red Planet" due to its surface being rich in iron oxide. It has long been a subject of scientific study and exploration as a potential location for future human missions.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 227.9 million km (1.52 AU)</li>
    <li><strong>Diameter:</strong> About 6,779 km, roughly half the size of Earth</li>
    <li><strong>Length of a day:</strong> 24 hours and 37 minutes</li>
    <li><strong>Length of a year:</strong> 687 Earth days</li>
    <li><strong>Surface temperature range:</strong> 20°C to –125°C</li>
    <li><strong>Atmosphere:</strong> Thin, primarily composed of carbon dioxide</li>
    <li><strong>Moons:</strong> Phobos and Deimos</li>
    <li><strong>Gravity:</strong> About 38% of Earth's gravity</li>
    <li><strong>Reason for its color:</strong> Iron oxide dust on the surface</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Mars hosts <strong>Olympus Mons</strong>, the largest volcano in the solar system, nearly three times the height of Mount Everest.</li>
    <li>The planet contains <strong>Valles Marineris</strong>, a canyon system that spans over 4,000 km, making it one of the largest in the solar system.</li>
    <li>Geological evidence suggests that Mars once had liquid water and may have supported microbial life in the past.</li>
    <li>Several space agencies, including NASA, are planning crewed missions to Mars within the coming decades.</li>
</ul>

<p><em>Survival on Mars would require advanced technology and life-support systems due to its harsh environment.</em></p>
`;

//earth
const earthInfo = `
<h2>🌍 Earth: Our Home Planet</h2>
<p>Earth is the third planet from the Sun and the only known world to support life. It has a diverse environment, abundant water, and a protective atmosphere that makes it unique among the planets in the solar system.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 149.6 million km (1 AU)</li>
    <li><strong>Diameter:</strong> About 12,742 km</li>
    <li><strong>Length of a day:</strong> 24 hours</li>
    <li><strong>Length of a year:</strong> 365.25 days</li>
    <li><strong>Surface temperature range:</strong> –88°C to 58°C</li>
    <li><strong>Atmosphere:</strong> Nitrogen (78%), Oxygen (21%), and trace gases</li>
    <li><strong>Moons:</strong> One natural satellite, the Moon</li>
    <li><strong>Gravity:</strong> 9.8 m/s² (standard Earth gravity)</li>
    <li><strong>Unique feature:</strong> Presence of liquid water and life</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Earth’s surface is about 71% water, making it the “Blue Planet.”</li>
    <li>The planet has a dynamic system of tectonic plates that shape continents and cause earthquakes.</li>
    <li>Earth’s magnetic field protects life from harmful solar radiation.</li>
    <li>The atmosphere and climate systems sustain a wide range of ecosystems and biodiversity.</li>
</ul>

<p><em>Earth remains the only planet known to harbor life, supported by its unique combination of water, atmosphere, and energy from the Sun.</em></p>
`;

//Jupiter
const jupiterInfo = `
<h2>♃ Jupiter: The Giant of the Solar System</h2>
<p>Jupiter is the fifth planet from the Sun and the largest in the solar system. It is a gas giant composed primarily of hydrogen and helium, with a powerful magnetic field and dozens of moons.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 778.5 million km (5.2 AU)</li>
    <li><strong>Diameter:</strong> About 139,820 km</li>
    <li><strong>Length of a day:</strong> 9 hours and 56 minutes</li>
    <li><strong>Length of a year:</strong> 11.86 Earth years</li>
    <li><strong>Surface temperature:</strong> Around –145°C (upper atmosphere)</li>
    <li><strong>Atmosphere:</strong> Mostly hydrogen and helium with traces of methane, ammonia, and water vapor</li>
    <li><strong>Moons:</strong> At least 95 known, including the four largest: Io, Europa, Ganymede, and Callisto</li>
    <li><strong>Gravity:</strong> About 2.4 times Earth's gravity</li>
    <li><strong>Unique feature:</strong> Prominent Great Red Spot, a massive storm persisting for centuries</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Jupiter has the strongest magnetic field of any planet in the solar system.</li>
    <li>Its moon Ganymede is the largest moon in the solar system, even bigger than Mercury.</li>
    <li>The planet emits more heat than it receives from the Sun due to internal processes.</li>
    <li>Jupiter’s immense gravity influences the orbits of other bodies and helps protect inner planets from frequent asteroid impacts.</li>
</ul>

<p><em>Jupiter’s size, composition, and dynamic atmosphere make it a key object of study in understanding planetary formation and evolution.</em></p>`;

//Saturn
const saturnInfo = `
<h2>♄ Saturn: The Ringed Planet</h2>
<p>Saturn is the sixth planet from the Sun and the second-largest in the solar system. It is best known for its spectacular ring system, which is composed of ice and rock particles. Saturn is a gas giant primarily made of hydrogen and helium.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 1.43 billion km (9.5 AU)</li>
    <li><strong>Diameter:</strong> About 116,460 km</li>
    <li><strong>Length of a day:</strong> 10 hours and 33 minutes</li>
    <li><strong>Length of a year:</strong> 29.5 Earth years</li>
    <li><strong>Surface temperature:</strong> Around –178°C (upper atmosphere)</li>
    <li><strong>Atmosphere:</strong> Mostly hydrogen and helium with traces of methane and ammonia</li>
    <li><strong>Moons:</strong> At least 146 known, including Titan and Enceladus</li>
    <li><strong>Gravity:</strong> About 1.07 times Earth's gravity</li>
    <li><strong>Unique feature:</strong> Extensive ring system composed of billions of icy particles</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Saturn’s rings span up to 282,000 km in diameter but are only about 10 meters thick.</li>
    <li>Titan, Saturn’s largest moon, has a dense atmosphere and lakes of liquid methane and ethane.</li>
    <li>Enceladus, another moon, has geysers that eject water vapor, suggesting a subsurface ocean.</li>
    <li>Saturn is less dense than water, meaning it would float if placed in a sufficiently large body of water.</li>
</ul>

<p><em>Saturn’s rings and diverse moons make it one of the most studied planets in the solar system, offering insights into planetary formation and potential habitability of icy worlds.</em></p>
`;

//Uranus
const uranusInfo = `
<h2>♅ Uranus: The Ice Giant</h2>
<p>Uranus is the seventh planet from the Sun and is classified as an ice giant due to its composition of water, methane, and ammonia ices. It is unique for its extreme axial tilt, which causes unusual seasonal variations.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 2.87 billion km (19.2 AU)</li>
    <li><strong>Diameter:</strong> About 50,724 km</li>
    <li><strong>Length of a day:</strong> 17 hours and 14 minutes</li>
    <li><strong>Length of a year:</strong> 84 Earth years</li>
    <li><strong>Surface temperature:</strong> Around –224°C</li>
    <li><strong>Atmosphere:</strong> Hydrogen, helium, and methane</li>
    <li><strong>Moons:</strong> At least 27 known, including Titania and Oberon</li>
    <li><strong>Gravity:</strong> About 89% of Earth's gravity</li>
    <li><strong>Unique feature:</strong> Rotates on its side with an axial tilt of about 98 degrees</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Uranus has a faint ring system composed of dark particles.</li>
    <li>The planet’s blue-green color is due to methane in its atmosphere absorbing red light.</li>
    <li>Its extreme tilt results in 42 years of continuous daylight or darkness at its poles.</li>
    <li>Uranus was the first planet discovered with a telescope, by William Herschel in 1781.</li>
</ul>

<p><em>Uranus’s unusual orientation and icy composition make it a subject of interest for understanding planetary dynamics and evolution.</em></p>
`;

//Neptune
const neptuneInfo = `
<h2>♆ Neptune: The Windy Ice Giant</h2>
<p>Neptune is the eighth and farthest planet from the Sun in the solar system. It is an ice giant composed mainly of hydrogen, helium, and methane, and is known for its intense winds and deep blue color.</p>
<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 4.5 billion km (30.1 AU)</li>
    <li><strong>Diameter:</strong> About 49,244 km</li>
    <li><strong>Length of a day:</strong> 16 hours and 6 minutes</li>
    <li><strong>Length of a year:</strong> 164.8 Earth years</li>
    <li><strong>Surface temperature:</strong> Around –214°C</li>
    <li><strong>Atmosphere:</strong> Hydrogen, helium, and methane</li>
    <li><strong>Moons:</strong> At least 14 known, including Triton</li>
    <li><strong>Gravity:</strong> About 1.14 times Earth's gravity</li>
    <li><strong>Unique feature:</strong> Strongest winds in the solar system, reaching up to 2,100 km/h</li>
</ul>
<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Neptune’s striking blue color is due to methane in its atmosphere absorbing red light.</li>
    <li>Triton, its largest moon, orbits in the opposite direction of Neptune’s rotation, suggesting it was captured from the Kuiper Belt.</li>
    <li>The planet emits more heat than it receives from the Sun, indicating internal heat sources.</li>
    <li>Neptune was discovered in 1846 through mathematical predictions rather than direct observation.</li>
</ul>
<p><em>Neptune’s extreme winds, icy composition, and distant location make it a fascinating subject for studying planetary atmospheres and dynamics.</em></p>
`;

//Pluto
const plutoInfo = `
<h2>♇ Pluto: The Dwarf Planet</h2>
<p>Pluto is a dwarf planet located in the Kuiper Belt beyond Neptune. Once considered the ninth planet in the solar system, it was reclassified as a dwarf planet in 2006 by the International Astronomical Union. Despite its small size, Pluto remains an object of significant scientific interest.</p>

<ul>
    <li><strong>Average distance from the Sun:</strong> Approximately 5.9 billion km (39.5 AU)</li>
    <li><strong>Diameter:</strong> About 2,377 km</li>
    <li><strong>Length of a day:</strong> 6 days and 9 hours</li>
    <li><strong>Length of a year:</strong> 248 Earth years</li>
    <li><strong>Surface temperature:</strong> Around –225°C</li>
    <li><strong>Atmosphere:</strong> Thin, primarily nitrogen with traces of methane and carbon monoxide</li>
    <li><strong>Moons:</strong> Five known, including Charon, its largest moon</li>
    <li><strong>Gravity:</strong> About 6% of Earth's gravity</li>
    <li><strong>Unique feature:</strong> Highly elliptical orbit and seasonal atmospheric changes</li>
</ul>

<hr>
<h3>Notable Features and Facts</h3>
<ul>
    <li>Pluto’s orbit sometimes brings it closer to the Sun than Neptune.</li>
    <li>Charon is so large relative to Pluto that they are often considered a double system.</li>
    <li>Pluto has mountains made of water ice and possible subsurface oceans.</li>
    <li>NASA’s New Horizons mission provided the first detailed images and data of Pluto in 2015.</li>
</ul>

<p><em>Pluto’s distant location and unique characteristics continue to provide valuable insights into the formation and evolution of the outer solar system.</em></p>
`;
