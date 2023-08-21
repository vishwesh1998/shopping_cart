import { Component } from "react";

export default class Add_Product extends Component
{
    // constructor() {
    //     super()
    //     this.state = {
    //         product: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('http://apps.codebetter.in:8082/emall/api/product/list').then(response=>response.json()).then(res =>this.setState({product:res}))
    // }

    save = (event)=>{
        event.preventDefault()
        
        let frmData = new FormData()
        // console.log(typeof frmData)
        frmData.append("prod_name",this.nameBox.value)
        frmData.append("prod_price",this.priceBox.value)
        frmData.append("prod_cate",this.cateBox.value)
        frmData.append("prod_brand",this.brandBox.value)
        frmData.append("prod_image",this.imageBox.files[0])
        fetch('http://apps.codebetter.in:8082/emall/api/product/save',{
            method : 'POST',
            body : frmData
        }).then(response=>response.json()).then(res=>console.log(res))
        event.target.reset()
        // console.log(this.props.product)
    }

    render() {
        return <div>
            <div className="row tm-row tm-mb-45">
                <div className="col-12">
                    <h1 className="alert-success">Add-Product Page</h1>
                    <hr className="tm-hr-primary tm-mb-35" />
                </div>
            </div>
            <div className='container'>
                <form onSubmit={this.save}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <input type="text" ref={ob=>this.nameBox=ob} placeholder="Product Name" className="form-control" required />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <input type="text" ref={ob=>this.priceBox=ob} placeholder="Product Price" className="form-control" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xl-6 col-lg-6">
                            <select ref={ob=>this.cateBox=ob} className='form-control'>
                                <option value="">Choose Category</option>
                                {this.props.category.map(ob=><option>{ob.cate_name}</option>)}
                                {/* {console.log(this.props.product)} */}
                            </select>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <select ref={ob=>this.brandBox=ob} className='form-control'>
                                <option value="">Choose Brand</option>
                                {this.props.brand.map(ob=><option>{ob.brand_name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xl-6 col-lg-6">
                            <input type="file" ref={ob=>this.imageBox=ob} placeholder="Product Image" required />
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <button className="btn btn-success">Save Products</button>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            {this.props.product==0?<button class="btn btn-danger">
                                <span class="spinner-border spinner-border-sm"></span>
                                Loading..
                            </button> : ''}
                        </div>
                    </div>
                </form>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.product.map((ob,index) => <tr>
                        <td>{index + 1}</td>
                        <td>
                            <img src={'data:image/png;base64,' + ob.prod_image} width={70} height={70} />
                        </td>
                        <td>{ob.prod_name}</td>
                        <td>{ob.prod_price}</td>
                        <td>{ob.prod_cate}</td>
                        <td>{ob.prod_brand} </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}