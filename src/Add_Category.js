import { Component } from "react";
import axios from 'axios'

export default class Add_Category extends Component
{
    save = async (event)=>{
        event.preventDefault()
        let obj = {
            cate_name : this.nameBox.value
        }
        const response = await axios.post('http://apps.codebetter.in:8082/emall/api/category/save',obj)
        console.log(response)
        // fetch('http://apps.codebetter.in:8082/emall/api/category/save',{
        //     method : 'POST',
        //     headers : {
        //         "Content-Type" : 'application/json' 
        //     },
        //     body : JSON.stringify(obj)
        // }).then(response=>response.json()).then(res=>console.log(res))
        event.target.reset()
    }


    render()
    {
        return <div>
            <div className="row">
                <div className="col-12">
                    <h1 className="alert-success">Add-Category Page</h1>
                    <hr className="tm-hr-primary tm-mb-45"/>
                </div>
            </div>
            <div className='container'>
                <form onSubmit={this.save}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <input type="text" placeholder="Category Name" className="form-control" required ref={ob=>this.nameBox=ob}/>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <button className='btn btn-success'>Save Category</button>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            {this.props.category==0?<button class="btn btn-danger">
                            <span class="spinner-border spinner-border-sm"></span>
                            Loading..
                            </button>:''}
                        </div>
                    </div>
                </form>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.category.map((ob,index)=><tr>
                    <td>{index+1}</td>
                    <td>{ob.cate_name}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    }
}