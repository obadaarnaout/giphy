import { useEffect, useState } from "react";


function App() {

  const [query,setQuery] = useState('');
  const [page,setPage] = useState(1);
  const [gifs,setGifs] = useState([]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    let timeout;
    if (query) {
      timeout = setTimeout(() => {
        search();
      }, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [query,page]);

  const search = async () => {
    let offset = 0;
    if (page > 1) {
      offset = page * 12;
    }
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=xBa7K4FcHGBEx6PGDodm5G0zo9iocuSV&offset=${offset}&limit=12`
    );
    const data = await res.json();
    setGifs(data.data);
  };

  const handlePreviousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <label class="form-label"></label>
            <input type="email" class="form-control" placeholder="Type something to start searching" onChange={handleQuery} />
          </div>
          <div class="col-md-3"></div>

          <div class="col-md-12">
            <div class="row">
            {gifs.map((gif) => (
              <div class="col-md-3">
                <div class="card">
                  <img key={gif.id} src={gif.images.original.url} alt={gif.title}/>
                </div>
              </div>
              ))}
              <div class="col-md-12">
                <nav>
                  <ul class="pagination">
                    <li class="page-item"><button class="page-link" onClick={handlePreviousPage} disabled={page === 1}>Previous</button></li>
                    <li class="page-item"><button class="page-link" onClick={handleNextPage}>Next</button></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
