const tableData= document.querySelector(".table-body")
async function fetchFromOffset(offset) {
    return await fetch('https://api.cricapi.com/v1/currentMatches?apikey=5259b967-c3f8-469a-91e8-464cc450d922&offset=' + offset)
        .then(data => data.json())
        .then(data => {
            let output =""
            data.data.map(stats => {
                output += `
            <tr>
                <td>${stats.name}</td>
                <td>${stats.matchType}</td>
                <td>${stats.status}</td>
                <td>${stats.venue}</td>
                <td>${stats.date}</td>
              </tr>
                `
            })
            tableData.innerHTML = output
        })
        .catch(e => console.log(e));
}

fetchFromOffset(0);