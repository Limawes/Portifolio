import React, { useEffect, useState } from 'react';
import GameService from '../service/game.service';
import Game from './Game';

const GamesList = () => {

  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState({ status: false, message: "" });
  const [q, setQ] = useState("");
  const [searchParam, setSearchParam] = useState(["title"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [genre, setGenre] = useState(["All"]);

  const listar = async () => {
    setLoad(true);
    const listGames = await GameService.listar();
    //Pesquisa para setar os generos
    if (!!listGames && listGames.status == 200) {
      let genre = ["Select..."];
      listGames.data.map(game => {
        genre.push(game.genre);
      });
      setGenre([...new Set(genre)]);
      setLoad(false);
      setGames(listGames.data);
    }
    //Tratamento de erros
    if (!!listGames && listGames.code == 'ECONNABORTED') {
      setGames([]);
      setLoad(false);
      setErro({ status: true, message: "O servidor demorou para responder, tente mais tarde" });
    }

    if (!!listGames.response && listGames.response.status == (500 || 502 || 503 || 504 || 507 || 508 || 509)) {
      setGames([]);
      setLoad(false);
      setErro({ status: true, message: "O servidor fahou em responder, tente recarregar a página" });
    }

    if (!!listGames.response && listGames.response.status != (200)) {
      setGames([]);
      setLoad(false);
      setErro({ status: true, message: "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde" });
    }

  }
  //Filtros de busca por genero e por título
  function searchGenre(genreFilter) {
    if (genreFilter == 'Select...') {
      setFilterParam(["ALL"]);
    } else {
      setFilterParam(genreFilter);
    }
  }

  function searchTitle(titleFilter) {
    setQ(titleFilter);
  }

  function search(items) {
    return items.filter((item) => {
      if (filterParam != "All" && item.genre == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    <React.Fragment>
      <div>
        {
          !!load && !erro.status && games.length == 0 && (
            <p className="message">Carregando...</p>
          )
        }
      </div>
      <div>
        {
          !!erro.status && !load && games.length == 0 && (
            <p className="message">{erro.message}</p>
          )
        }
      </div>
      {!!games && games.length > 0 && (
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className=".input-control"
              placeholder="Search game here"
              value={q}
              onChange={(e) => searchTitle(e.target.value)}
            />
          </label>
        </div>
      )}
      {!!games && games.length > 0 && (
        <label>
          <select name="Genre" className="search-wrapper" onChange={(e) => searchGenre(e.target.value)}>
            {
              genre.map(data => (<option value={data}>{data}</option>))
            }
          </select>
        </label>
      )}
      <div className="game-list">
        {!!games && games.length > 0 && (
          search(games).map((game) => (
            <Game key={game.id} {...game} />
          ))
        )}
      </div>
    </React.Fragment>
  )
};

export default GamesList;