import React from "react";
import "./Text.css"
export default function Text(props){
	const {data} = props
	debugger
    return (
        <>
        <div  className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h3 id="resizing-h3" className="" >
					<span>
							<div className="stage">
								{data?.technologiesCollection?.items?.map((item) =>(
								<div className="cubespinner">
									<div className="face1">{item.language[0]}</div>
									<div className="face2">{item.language[1]}</div>
									<div className="face3">{item.language[2]}</div>
									<div className="face4">{item.language[3]}</div> 
									{/* {/* <div class="face5">Type Script</div> */}

								</div>))}
							</div>
						</span>
					</h3>
				</div>
        </>
    )
}