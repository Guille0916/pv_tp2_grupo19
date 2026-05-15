const selectPais = document.querySelector(`#pais`);
const selectCapital = document.querySelector(`#capital`);


selectPais.addEventListener(`change`, (event) => {

    const pais = event.target.value;

    if (pais === `argentina`) {
        selectCapital.value = `buenos_aires`;
    }

    if (pais === `brasil`) {
        selectCapital.value = `brasilia`;
    }

    if (pais === `chile`) {
        selectCapital.value = `santiago`;
    }

    if (pais === `uruguay`) {
        selectCapital.value = `montevideo`;
    }

    if (pais === `paraguay`) {
        selectCapital.value = `asuncion`;
    }

    if (pais === `peru`) {
        selectCapital.value = `lima`;
    }

    const capital = selectCapital.value;

    console.log(`Pais: ${pais} Capital: ${capital}`);
});
