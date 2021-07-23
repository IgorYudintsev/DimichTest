import React, {useState} from 'react';
import styles from './App.module.css'
import './App.css';
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";
import {countAC, countThunk} from "./reducers/countReducer";
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';

function App() {
    let[loading,setLoading]=useState(false)
    let dispatch = useDispatch()
    let count = useSelector<rootReducerType, number>(state => state.count)
    const addFoo = () => {
        dispatch(countThunk(count,setLoading))
    }



    return (
        <div className="App">
            <div className={styles.tsarDiv}>
                <div className={styles.count}>{count}</div>
                  <Button loading={loading} addFoo={addFoo}/>
                {loading &&<LinearProgress className={styles.linearProgress} color="secondary" />}
            </div>

        </div>
    );
}

export default App;
