import React from 'react'
import '../Components/Global.css'
import '../Components/Image.css'

function Image (props) {
	<div className="img_block">
		{(() => {
			for(let i = 0; i < props.list.length(); i++) {
				return props.list[i];
			}
		})()}
	</div>
}

export default Image