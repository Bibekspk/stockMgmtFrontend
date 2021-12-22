import React from 'react';
import './sidebar.css';
import { HouseFill, Stack, GearFill, PeopleFill, BoxArrowLeft, CaretDownFill } from 'react-bootstrap-icons';

export const SideBar = (props) => {
    return (
        <div class="row">
            <div class="sideBar col-xs-12 col-md-2 bg-dark" >
                <a href="/" class="align-items-center text-light text-decoration-none bg-dark">
                    <span class="mx-4">DASHBOARD</span>
                </a>
                <ul id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <span> <HouseFill></HouseFill> </span>
                            <span class="mx-auto">&nbsp;Home</span>
                        </a>
                    </li>
                    <li className="submenu">
                        <a class="btn btn-lg btn-dark" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span><Stack></Stack></span>
                            <span class="mx-2">Stocks</span>{/* d-none d-sm-inline vanya hide in xs huda*/}
                            <span>{' '}{' '}<CaretDownFill></CaretDownFill></span>
                        </a>
                        <br />
                        <div class="collapse" id="collapseExample">
                            <ul>
                                <li className='mt-2'><a href="/addStock">Add Stock</a></li>
                                <li className='mt-1'><a href="#">View Stock</a></li>
                                <li className='mt-1'><a href="#">Add Category</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <span class="ms-1 ">&nbsp;Sales</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span><PeopleFill></PeopleFill></span>
                            <span class="ms-1 ">&nbsp;Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span><PeopleFill></PeopleFill></span>
                            <span class="ms-1 ">&nbsp;Items</span>
                        </a>
                    </li>
                    <li className="submenu">
                        {/* href chai kun collapse kholni vanera ho, collapseExample1 cha tei vayera tyo extend huncha 
                    but if collapseExample2 vayeko vaye arko extend hunthyo yeha click garda   */}
                        <a className="btn btn-lg btn-dark" data-bs-toggle="collapse" href="#collapseExample1" role="button1" aria-expanded="false" aria-controls="collapseExample">
                            <span><GearFill></GearFill></span>
                            <span class="ms-1 ">&nbsp;Settings</span>
                            <span>{' '}{' '}<CaretDownFill></CaretDownFill></span>
                        </a>
                        <br />
                        <div class="collapse" id="collapseExample1">
                            <ul>
                                <li className='mt-2'><a href="#">Change Password</a></li>
                                <li className='mt-1'><a href="#">Edit Profile</a></li>
                            </ul>
                        </div>

                    </li>
                    <li>
                        <a href="#" class="nav-link">
                            <span><BoxArrowLeft></BoxArrowLeft></span>
                            <span class="ms-1 ">&nbsp;Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-10 content">
                {props.children}
            </div>
        </div>
    )
}
