import { CircularProgress, Container, MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EdgeCard from './EdgeCard';
import ReactPaginate from 'react-paginate';
import "../../stylesheets/paginate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function EdgeList() {
    const [edges, setEdges] = useState([]);
    const [filteredEdges, setFilteredEdges] = useState(edges);
    const [itemOffset, setItemOffset] = useState(0);
    const [filterLevel, setFilterLevel] = useState('all');

    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage
    const currentItems = filteredEdges.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredEdges.length / itemsPerPage);

    useEffect(() =>{
        axios
            .get('https://swade-api.azurewebsites.net/api/GetAllEdges')
            .then((res) =>{
                setEdges(res.data);
            })
            .catch((err) =>{
                console.log("Error from Edges: " + err)
            })
    })

    const handlePageClick = (event) =>{
        const newOffset = (event.selected * itemsPerPage) % filteredEdges.length;
        setItemOffset(newOffset); 
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = edges.filter(edge => edge.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredEdges(filtered);
    }

    const handleLevelFilter = (event) => {
        const value = event.target.value;
        setFilterLevel(value);
        console.log(filterLevel);
        if(value === 'all') {
            setFilteredEdges(edges);
        } else {
            const filtered = edges.filter(edge => edge.level === value);
            setFilteredEdges(filtered);
        }
    }

    const edgeList = 
        edges.length === 0 ? <CircularProgress /> :
        filteredEdges.length === 0 ? setFilteredEdges(edges) :
        currentItems.map((edge, e) => 
        <div key={e}>
            <EdgeCard edge={edge} />
        </div>)

  return (
    <>
    <Container>
        <TextField id='standard-basic' label="Search Edges" variant='standard' onChange={handleFilter} />
        <Select
            value={filterLevel}
            onChange={handleLevelFilter}
            
            >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'Novice'}>Novice</MenuItem>
            <MenuItem value={'Seasoned'}>Seasoned</MenuItem>
            <MenuItem value={'Veteran'}>Veteran</MenuItem>
            <MenuItem value={'Heroic'}>Heroic</MenuItem>
            <MenuItem value={'Legendary'}>Legendary</MenuItem>
        </Select>
    </Container>
    <Container>
        {edgeList}
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
