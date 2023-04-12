const SearchBar = ({search, setSearch}) => {
    return <form onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor='search'>Search</label>
        <input 
            id='search'
            type='text'
            role="searchbox"
            placeholder="Search Items"
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
        />
    </form>
}

export default SearchBar