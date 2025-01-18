
  const apiKey = "AIzaSyCmxFUu8zlHdi_fOtHZfAi_Ap8DLZU7Obg";       // Replace with your API Key
  const searchEngineId = "27b1029e2140149c3";  // Replace with your CX ID

  document.getElementById('searchBtn').addEventListener('click', function() {
    document.getElementById('closeBtn').style.display = 'block';
    document.getElementById('searchBtn').style.display = 'none';
    const query = document.getElementById('searchBox').value;
    searchGoogle(query);
  });

  function searchGoogle(query) {
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = '';

        if (data.items) {
          data.items.forEach(item => {
            const resultItem = `
              <div class="search-result">
                <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${item.snippet}</p>
                <a href="${item.link}" class="result-url">${item.link}</a>
              </div>
            `;
            resultsDiv.innerHTML += resultItem;
          });
        } else {
          resultsDiv.innerHTML = '<p>No results found.</p>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  document.getElementById('searchBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {

      document.getElementById('searchBtn').click();
    }
  });

 

  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchBox').placeholder = '...';
    document.getElementById('searchBox').value = '';                    // Add this line
     
    document.getElementById('closeBtn').style.display = 'none';
    document.getElementById('searchBtn').style.display = 'block';
  });
