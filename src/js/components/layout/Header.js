import React from "react";


export default class Header extends React.Component {
	render() {
		return (
			<header id="header" >
				<div class="headerbar">
					
					<div class="headerbar-left">
						<ul class="header-nav header-nav-options">
							<li class="header-nav-brand" >
								<div class="brand-holder">
									<a href="/">
										<img src="./assets/backoffice-ralali-logo.svg" />
									</a>
									<br/>
									ralali backoffice v2.2.1
								</div>
							</li>
							<li>
								<a class="btn btn-icon-toggle menubar-toggle" data-toggle="menubar" href="javascript:void(0);">
									<i class="fa fa-bars"></i>
								</a>
							</li>
						</ul>
					</div>

					<div class="headerbar-right">
						<ul class="header-nav header-nav-options">
							<li>
								<form class="navbar-search" role="search">
									<div class="form-group">
										<input type="text" class="form-control" name="headerSearch" placeholder="Enter your keyword"/>
									</div>
									<button type="submit" class="btn btn-icon-toggle ink-reaction"><i class="fa fa-search"></i></button>
								</form>
							</li>
							<li class="dropdown hidden-xs">
								<a href="javascript:void(0);" class="btn btn-icon-toggle btn-default" data-toggle="dropdown">
									<i class="fa fa-bell"></i><sup class="badge style-danger">4</sup>
								</a>
								<ul class="dropdown-menu animation-expand">
									<li class="dropdown-header">Today's messages</li>
									<li>
										<a class="alert alert-callout alert-warning" href="javascript:void(0);">
											<img class="pull-right img-circle dropdown-avatar" src="../../assets/img/avatar2.jpg?1404026449" alt="" />
											<strong>Alex Anistor</strong><br/>
											<small>Testing functionality...</small>
										</a>
									</li>
									<li>
										<a class="alert alert-callout alert-info" href="javascript:void(0);">
											<img class="pull-right img-circle dropdown-avatar" src="../../assets/img/avatar3.jpg?1404026799" alt="" />
											<strong>Alicia Adell</strong><br/>
											<small>Reviewing last changes...</small>
										</a>
									</li>
									<li class="dropdown-header">Options</li>
									<li><a href="../../html/pages/login.html">View all messages <span class="pull-right"><i class="fa fa-arrow-right"></i></span></a></li>
									<li><a href="../../html/pages/login.html">Mark as read <span class="pull-right"><i class="fa fa-arrow-right"></i></span></a></li>
								</ul>
							</li>
							<li class="dropdown hidden-xs">
								<a href="javascript:void(0);" class="btn btn-icon-toggle btn-default" data-toggle="dropdown">
									<i class="fa fa-area-chart"></i>
								</a>
								<ul class="dropdown-menu animation-expand">
									<li class="dropdown-header">Server load</li>
									<li class="dropdown-progress">
										<a href="javascript:void(0);">
											<div class="dropdown-label">
												<span class="text-light">Server load <strong>Today</strong></span>
												<strong class="pull-right">93%</strong>
											</div>
											<div class="progress"><div class="progress-bar progress-bar-danger"></div></div>
										</a>
									</li>
									<li class="dropdown-progress">
										<a href="javascript:void(0);">
											<div class="dropdown-label">
												<span class="text-light">Server load <strong>Yesterday</strong></span>
												<strong class="pull-right">30%</strong>
											</div>
											<div class="progress"><div class="progress-bar progress-bar-success"></div></div>
										</a>
									</li>
									<li class="dropdown-progress">
										<a href="javascript:void(0);">
											<div class="dropdown-label">
												<span class="text-light">Server load <strong>Lastweek</strong></span>
												<strong class="pull-right">74%</strong>
											</div>
											<div class="progress"><div class="progress-bar progress-bar-warning"></div></div>
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<ul class="header-nav header-nav-profile">
							<li class="dropdown">
								<a href="javascript:void(0);" class="dropdown-toggle ink-reaction" data-toggle="dropdown">
									<img src="../../assets/img/avatar1.jpg?1403934956" alt="" />
									<span class="profile-info">
										Daniel Johnson
										<small>Administrator</small>
									</span>
								</a>
								<ul class="dropdown-menu animation-dock">
									<li class="dropdown-header">Config</li>
									<li><a href="../../html/pages/profile.html">My profile</a></li>
									<li><a href="../../html/pages/blog/post.html">My blog <span class="badge style-danger pull-right">16</span></a></li>
									<li><a href="../../html/pages/calendar.html">My appointments</a></li>
									<li class="divider"></li>
									<li><a href="../../html/pages/locked.html"><i class="fa fa-fw fa-lock"></i> Lock</a></li>
									<li><a href="../../html/pages/login.html"><i class="fa fa-fw fa-power-off text-danger"></i> Logout</a></li>
								</ul>
							</li>
						</ul>
						<ul class="header-nav header-nav-toggle">
							<li>
								<a class="btn btn-icon-toggle btn-default" href="#offcanvas-search" data-toggle="offcanvas" data-backdrop="false">
									<i class="fa fa-ellipsis-v"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			
		);
	}
}