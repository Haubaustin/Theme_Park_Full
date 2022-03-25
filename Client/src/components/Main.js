import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'
import Deals from './Deals'
import dummy from '../data/dummy'
import target from '../data/target'
import ParkCard from "./ParkCard";
import BudgetCard from './BudgetCard'
import { Link } from "react-router-dom";
import axios from "axios"

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [deals, setDealsResults] = useState([])
    const [searchValue, setSearchValue] = useState()
    const [budgetResults, setBudgetResults] = useState([])
    const [searching, setSearching] = useState(false)

    const getSearchResults = async (e) => {
        setSearching(true)
        e.preventDefault()
        const parks = await axios.get("http://localhost:3001/parks")
        setSearchResults(parks.data)
        setSearchQuery('')
    }

    const getBudgetResults = async (e) => {
        setSearching(false)
        e.preventDefault()
        setBudgetResults(target)
        setSearchValue('')
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const getDealResults = async () => {
            const rides = await axios.get("http://localhost:3001/rides")
            setDealsResults(rides.data)
        }
        getDealResults()
    },[])
    
    const handleValue = (e) => {
        setSearchValue(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="dDisplay">
            {deals.map((res) => (
        <Deals key={res._id} name={res.title} desc={res.description} />
            ))}
            </div>
        <SearchBar 
            onSubmit1={getSearchResults}
            onSubmit2={getBudgetResults}
            onChange={handleChange}
            onCheck={handleValue}
            value1={searchQuery}
            value2={searchValue}
        />
        <h2>Search Results</h2>
        <section className="searchResults">
            {searching && searchResults.map((result) => (
                <Link to={`parks/${result._id}`}>
                <ParkCard key={result._id} name={result.name} price={result.avg_price} img={result.image} location={result.location} />
                </Link>
            ))}
            {!searching && budgetResults.map((result) => (
                <BudgetCard key={result.id} name={result.parkName} price={result.parkPrice} />
            ))}
        </section>
        </div>
    )
}

export default Main