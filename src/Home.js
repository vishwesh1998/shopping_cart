import { Component } from "react";

export default class Home extends Component
{
    render()
    {
        return <div>
            <div className="row tm-row tm-mb-45">
                <div className="col-12">
                    <h1 className="alert-success">Home Page</h1>
                    <hr className="tm-hr-primary tm-mb-55"/>
                </div>
            </div>
            <img src="../img/eMall.jpg" alt="" />
        </div>
    }
}