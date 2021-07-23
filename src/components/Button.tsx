import styles from './Button.module.css'

type propsType={
    addFoo:()=>void
    loading:boolean
}
export const Button=(props:propsType)=>{
    const onclickHandler=()=>{
        props.addFoo()
    }
    return(
        <button disabled={props.loading} className={styles.button} onClick={onclickHandler}>+</button>
    )
}