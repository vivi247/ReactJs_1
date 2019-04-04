import React from 'react';

function Person() {
    const data = [
        {name:'Vivek', age:29, degree:'BE', place:'Bangalore'},
        {name:'Vikas', age:25, degree:'MBA', place:'Mudigere'},
        {name:'John', age:30, degree:'PG', place:'NY'},
        {name:'Grey', age:45, degree:'MS', place:'LA'}
    ];

    return (
        <section className='text-center grid'> 
        {
            data.map((user, i) =>(
               <Persons key={i} person={user}/>
            )) 
        }
        {/* {
            data.map((user, i) =>{
               return (<Persons id ={i} person={user}/>);
            }) 
        } */}
        {/* {
            data.forEach(item =>{
             <Persons person={item}/>
            })
        } */}
            {/* <Persons person={data[0]}/>
            <Persons person={data[1]}/>
            <Persons person={data[2]}/>
            <Persons person={data[3]}/> */}
        </section>
    );
}

export const Persons = props => {
    const {name,age,degree,place} = props.person;

    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h5>Degree: {degree}</h5>
            <h6>Place: {place}</h6>
        </div>
    );
}

export default Person;