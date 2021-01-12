import React,{useState} from 'react';
import Dropdown from './components/Dropdown'
import Route from './components/Route'
import Header from './components/Header'


import Accordion from './components/Accordion'
import Search from './components/Search'
import Translate from './components/Translate';


const items=[
    {
        title:'What is React',
        content:'React is a front end library'
    },
    {
        
        title:'Why use React',
        content:'React is OP'
    },
    {
        
        title:'How do you use React??',
        content:'React is used with components'
    },

];


const options=[
    {
        label:'the color is red',
        value:'red'
    },
    {
        label:'the color is green',
        value:'green'
    },
    {
        label:'the color is blue',
        value:'blue'
    }
];





export default()=>{
    const [selected, setSelected]=useState(options[0]);
    // //const [showDropdown, setDropdown]=useState(true)
    return(
        <div>
        <Header/>

        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
        <Route path="/dropdown">
            <Dropdown 
            label="select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}/>
        </Route>           
        </div> 
    );
};