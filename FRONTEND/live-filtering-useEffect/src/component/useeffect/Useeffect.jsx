import { useEffect, useState } from "react";
import style from './useeffect.module.css'
const array = [
    { key: '1', type: 'planet', value: 'Tatooine' },
    { key: '2', type: 'planet', value: 'Alderaan' },
    { key: '3', type: 'starship', value: 'Death Star' },
    { key: '4', type: 'starship', value: 'CR90 corvette' },
    { key: '5', type: 'starship', value: 'Star Destroyer' },
    { key: '6', type: 'person', value: 'Luke Skywalker' },
    { key: '7', type: 'person', value: 'Darth Vader' },
    { key: '8', type: 'person', value: 'Leia Organa' },
];

const Useeffect = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputType, setInputType] = useState('');
    const [filteredArray, setFilteredArray] = useState(array);

    const inputValueHandler = e => {
        setInputValue(e.target.value);
    };

    const inputTypeHandler = e => {
        setInputType(e.target.value);
    };

    useEffect(() => {
        setFilteredArray((_) => {
            const newArray = array.filter(item => item.value.includes(inputValue)).filter(item => item.type.includes(inputType));
            return newArray;
        });
    }, [inputValue, inputType]);

    // Prepare array to be rendered
    const listItems = filteredArray.map((item) =>
        <>
            <tr>
                <td className={style.td}>{item.type}</td>
                <td className={style.td}> {item.value}</td>
            </tr >
        </>
    );

    return (
        <>
            <h3>live filtering</h3>
            <form >
                <div>
                    <label htmlFor="input-type">Filter by <b>type</b></label>
                    <input type="text" id="input-type"  onChange={inputTypeHandler}  />
                </div>
                <div>
                    <label htmlFor="input-value">Filter by <b>value</b></label> 
                    <input type="text" id="input-value" autoComplete="off" onChange={inputValueHandler} />
                </div>
            </form>
            <table className={style.table}>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                {listItems}
            </table>
        </>
    );
};

export default Useeffect;