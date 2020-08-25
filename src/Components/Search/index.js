import React from "react"
import DropDown from "../DropDown"
import "./styles.css"

const dropdownList = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Movies",
    value: "movie",
  },
  {
    label: "Series",
    value: "series",
  },
  {
    label: "Episodes",
    value: "episode",
  },
]
function SearchForm({ search, setSearch, getMovieData, handleState }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="search Movies/Series/Episodes"
      />
      <DropDown dropdownList={dropdownList} handleState={handleState} />

      <button
        onClick={() => {
          getMovieData(search)
          handleState("showFav", false)
        }}
      >
        Search
      </button>

      <button
        onClick={() => {
          handleState("showFav", true)
          setSearch("")
        }}
        className="fav-btn"
      >
        <span>
          Favourite Movies <i className="fa fa-heart" />
        </span>
      </button>
    </div>
  )
}

export default SearchForm
