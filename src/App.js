import React, { Component } from 'react';
import Form from './Form.js';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coul:false,
      tab:[],
      c:0,
      titre:'',
      tabbox:[{id:0, couleur:false,count:0},{id:1, couleur:false,count:0},{id:2, couleur:false,count:0},{id:3, couleur:false,count:0},{id:4, couleur:false,count:0}],
        
      }
  }
  Box=()=>{ 
    this.setState({
     
      tabbox:[{id:Math.round, couleur:this.state.couleur,count:this.state.count},{id:Math.round, couleur:this.state.couleur,count:this.state.count},{id:Math.round, couleur:this.state.couleur,count:this.state.count},{id:Math.round, couleur:this.state.couleur,count:this.state.count},{id:Math.round, couleur:this.state.couleur,count:this.state.count}],
        
         })
   
  }
  col=(d)=>{
    
    this.setState({
         tabbox:this.state.tabbox.map((e)=>(e.id===d)?{id:d,couleur:!e.couleur,count:((this.state.c<5 && !e.couleur)?(this.setState({c:this.state.c+1})):(this.setState({c:this.state.c-1})))}:e),
         
         //c:(this.state.c<5 && e.)?this.state.c+1:this.state.c-1,
          })
  
  }
  
  search=(event)=>{
    this.setState({
    titre:event.target.value,
    tab:this.state.tab.filter((e)=>(e.name===this.state.titre))
    })
  }
  render() { 
    return ( <div > 
      <div className='search-box'><input type='text' placeholder='search' onChange={this.search} />
      <i  style={{color:((this.state.tabbox[0].couleur)?'black':'grey') }} onClick={()=>this.col(0)}className="fas fa-star "></i>
      <i  style={{color:((this.state.tabbox[1].couleur)?'black':'grey') }} onClick={()=>this.col(1)}className="fas fa-star"></i>
      <i  style={{color:((this.state.tabbox[2].couleur)?'black':'grey') }} onClick={()=>this.col(2)}className="fas fa-star"></i>
      <i  style={{color:((this.state.tabbox[3].couleur)?'black':'grey') }} onClick={()=>this.col(3)}className="fas fa-star"></i>
      <i  style={{color:((this.state.tabbox[4].couleur)?'black':'grey') }} onClick={()=>this.col(4)}className="fas fa-star"></i>
     </div>  
     <div><Form  titre={this.state.titre} conteur={this.state.c} /></div>
    </div> );
  }
}
 
export default App;
