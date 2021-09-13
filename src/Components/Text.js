import React from 'react'
import '../Components/Global.css'
import '../Components/Text.css'

function Text(props) {
	return (
		<div className="content_block" style={ props.style }>
			<div className="container">
				{(() => {
					if(props.title != null) {
						return (<h1 className="title">{ props.title }</h1>);
					}
				})()}

				{(() => {
					if(props.subtitle != null) {
						return (<h2 className="subtitle">{ props.subtitle }</h2>);
					}
				})()}

				{(() => {
					if(props.content != null) {
						return (<div className="content">{ props.content }</div>);
					}
				})()}

				{(() => {
					if(props.quotation != null) {
						return (<p className="quotation">{ props.quotation }</p>);
					}
				})()}

				{(() => {
					if(props.creed != null) {
						return (<h2 className="quotation creed">{ props.creed }</h2>);
					}
				})()}

				{(() => {
					if(props.quotation_author != null) {
						return (<h3 className="quotation_author">{ props.quotation_author }</h3>);
					}
				})()}
			</div>
		</div>
	)
}

export default Text