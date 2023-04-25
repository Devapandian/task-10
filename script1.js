async function getdata() {
    let countryName = document.getElementById("countryname").value;
    try {
      let res = await fetch(`https://api.covid19api.com/total/country/${countryName}`);
      let data = await res.json();
      let index = data.length - 1;
       let activeCases = data[index].Active;
      let deaths = data[index].Deaths;
      let recovered = data[index].Recovered;
      let result = document.getElementById("result");
      result.innerHTML = `<p>Active Cases: ${activeCases}</p><p>Deaths: ${deaths}</p><p>Recovered: ${recovered}</p>`;
    } catch (error) {
      console.log(error);
    }
  }
  