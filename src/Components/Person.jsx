import React from 'react'

import classes from './Person.module.css';

const Person = (props) => {
  return (
    <div className={classes.person}>
        <div className={classes.name}>
            <span className={classes.label}>Name : </span> {props.name}
        </div>
        <div className={classes.height}>
            <span className={classes.label}>Height : </span> {props.height}
        </div>
        <div className={classes.gender}>
            <span className={classes.label}>Gender : </span> {props.gender}
        </div>
    </div>
  )
}

export default Person