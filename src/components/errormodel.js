import classes from "./errormodel.module.css"
const Errormodel=(props)=>
{
    return(
        <>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <div className={classes.card}>
        <div className={classes.title}>
            <h1>{props.title}</h1>
        </div>
        <div className={classes.message}>
            <p>{props.message}</p>
        </div>
        <button onClick={props.onConfirm}>okay</button>
        </div>
        </>
    )
}
export default Errormodel;