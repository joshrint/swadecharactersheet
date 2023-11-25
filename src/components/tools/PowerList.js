import { CircularProgress, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PowerCard from './PowerCard';
import ReactPaginate from 'react-paginate';
import "../../stylesheets/paginate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PowerList() {
    const [powers, setPowers] = useState([]);
    const [filteredPowers, setFilteredPowers] = useState(powers);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage
    const currentItems = filteredPowers.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredPowers.length / itemsPerPage)

    useEffect(() =>{
        axios
            .get('https://swade-api.azurewebsites.net/api/GetAllPowers')
            .then((res) =>{
                setPowers(res.data);
            })
            .catch((err)=>{
                console.log("Error from Powers: " + err)
            })
    })

    const handlePageClick = (event) =>{
        const newOffset = (event.selected * itemsPerPage) % filteredPowers.length;
        setItemOffset(newOffset);
    };
    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = powers.filter(power => power.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredPowers(filtered);
    }

    const powerList = 
        powers.length === 0 ? <CircularProgress /> : filteredPowers.length === 0 ? setFilteredPowers(powers) :currentItems.map((power, p) =>
        <div key={p}>
            <PowerCard  power={power} />
        </div>)
        
  return (
    <>
    <Container>
        <TextField id='standard-basic' label="Search Powers" variant='standard' onChange={handleFilter} />
    </Container>
    <Container>
        {powerList}
    </Container>
    <Container>
        <ReactPaginate
            className='paginate'
            breakLabel="..."
            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
            renderOnZeroPageCount={null}
        />
    </Container>
    </>
  )
}
