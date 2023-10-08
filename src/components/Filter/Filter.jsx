export const Filter = ({ onSearchContact, filterName }) =>{
    return <label>Find contacts by name
        <input value={filterName} type="text" onChange={(e) => onSearchContact(e.target.value)}></input>
    </label>
}