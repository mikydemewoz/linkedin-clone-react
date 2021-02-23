import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widget.css'

function Widget() {

    const newsArticle = (heading, subTitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4> { heading } </h4>
                <p> {subTitle} </p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React the new front end","In the comming times react will be the best")}
            {newsArticle("node the best framework for javascript","In the comming times node will be the best")}
        </div>
    )
}

export default Widget
