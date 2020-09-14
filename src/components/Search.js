import React from 'react';
import {FormGroup, Input, Label, Button} from 'reactstrap';
import { FormWrapper } from '../styles';



const SearchBar = () => {

    return (
        <FormWrapper>
            <FormGroup>
                <Label for="searchTerm" hidden>Search by Location:</Label>
                <Input type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Mount Rushmore OR 10014 OR Denver, CO" 
                    // value={searchTerm}
                    // onChange={handleInputChange}
                />
             </FormGroup>
             <Button>Submit</Button>
        </FormWrapper>
            
    );
};

export default SearchBar;