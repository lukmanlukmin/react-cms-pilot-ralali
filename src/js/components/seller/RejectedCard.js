import React from "react";
import { connect } from "react-redux"
import moment from 'moment'

import AuthorizedComponent from "../../util/AuthorizedComponent"
import Formater from "../../util/Formater"


export default class RejectedCard extends React.Component {
	constructor() {
		super()
		AuthorizedComponent.authComponent(this)
  	}

  	
  	render() {
  		const { countAllItem } = this.props;
	    return (
	    	<div class="card">
				<div class="card-body no-padding">
					<div class="alert alert-callout alert-danger no-margin">
						<h1 class="pull-right text-danger">
							<i class="md md-report-problem"></i>
						</h1>
						<strong class="text-xl">{Formater.standartNumber(12345)}</strong><br/>
						<div class="text-danger">Rejected</div>
						<span class="opacity-50">Show On Table</span>
					</div>
				</div>
			</div>
	    );
  	}
}