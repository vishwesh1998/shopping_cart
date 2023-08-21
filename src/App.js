import { Component } from "react";
import Header from "./Header";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Add_Category from "./Add_Category";
import Add_Brand from "./Add_Brand";
import Add_Product from "./Add_Product";
import axios from 'axios'

export default class App extends Component
{
  constructor()    
    {
        super()
        this.state = {
            category : [],
            brand: [],
            product: []
        }
      }

    a = async () =>{
      const b = await axios.get('http://apps.codebetter.in:8082/emall/api/category/list')
      this.setState({category:b.data})
      const c = await axios.get('http://apps.codebetter.in:8082/emall/api/brand/list')
      this.setState({brand:c.data})
      const d = await axios.get('http://apps.codebetter.in:8082/emall/api/product/list')
      console.log(d)
      this.setState({product:d.data})
      // console.log(b)
    }

    componentDidMount()
    {
      this.a()
        // fetch('http://apps.codebetter.in:8082/emall/api/category/list').then(response=>response.json()).then(result=>{
        //   this.setState({category:result})
        //     fetch('http://apps.codebetter.in:8082/emall/api/brand/list').then(response => response.json()).then  (res =>{
        //       this.setState({brand:res})
        //       fetch('http://apps.codebetter.in:8082/emall/api/product/list').then(response=>response.json()).then(res =>this.setState({product:res}))
        //   })
        // })
    }


  //   save = (event)=>{
  //     let name = this.nameBox.value
  //     let obj = {
  //         cate_name : name
  //     }

  //     fetch('http://apps.codebetter.in:8082/emall/api/category/save',{
  //         method : "POST",
  //         headers : {
  //             "Content-Type" : 'application/json'
  //         },
  //         body : JSON.stringify(obj) 
  //     }).then(response=>response.json()).then(res=>this.setState({category:[...this.props.category,res]}))
  //     event.preventDefault()
  // }

  render()
  {
    return <div> 
        <Header/>
        <div className="container-fluid">
          <main className="tm-main">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/add_category" element={<Add_Category  category={this.state.category}/>} />
              <Route path="/add_brand" element={<Add_Brand brand={this.state.brand}/>} />
              <Route path="/add_product" element={<Add_Product product={this.state.product} brand={this.state.brand} category={this.state.category}/>} />
            </Routes>
          </main>
        </div>
        </div>
  }
}