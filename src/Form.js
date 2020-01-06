import React, { Component } from 'react';
const FilmBox = (props) => {
    return (<div className='exemple'>
        <img className='img' src={props.link} alt='pic' />
        <div ><i style={{ color: props.rate >= 1 ? 'black' : 'grey' }} className="fas fa-star"></i><i style={{ color: props.rate >= 2 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: props.rate >= 3 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: props.rate >= 4 ? 'black' : 'grey' }} class="fas fa-star"></i><i style={{ color: props.rate === 5 ? 'black' : 'grey' }} class="fas fa-star"></i></div>
        <span>{props.name}</span>
    </div>

    )
}

class Form extends Component {
    constructor(props) {


        super(props);
        this.state = {
            tab: [],
            rate: 0,
            name: '',
            link: '',
            boxtab: [<FilmBox name={'avenger'} rate={4} link={'https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg'} />,<FilmBox name={'annihilation'} rate={3} link={'https://media.senscritique.com/media/000017617001/325/Annihilation.jpg'} />,],
            show: false

        }
    }
    showmodal = () => {
        this.setState({
            show: true
        })
    }
    naming = (event) => {
        this.setState({
            name: event.target.value

        })
    }
    img = (event) => {
        this.setState({
            link: event.target.value,
        })

    }
    rating = (event) => {
        this.setState({
            rate: event.target.value,
        })
    }
    tabing = () => {
        this.setState({
            tab: [...this.state.tab, {id:Math.round, nam: this.state.name, rat: this.state.rate, lin: this.state.link }],
            show:false
        })

    }
    boxing = (id) => {
        this.setState({
             boxtab: [...this.state.boxtab, <FilmBox name={this.state.name} rate={this.state.rate} link={this.state.link} />],
           // tab:this.state.tab.filter((e)=>(e.id!==id)),
            show:!this.state.show 
        });

    }
  
 filtrer=()=>{

if (this.props.titre){return (this.state.boxtab.filter((e)=>(e.props.name===this.props.titre)))}
else if (this.props.conteur>0){return(this.state.boxtab.filter((e)=>(parseInt(e.props.rate)===this.props.conteur)))}
else {return  this.state.boxtab  }
       
   }

    render() {
        return (<div className='bigbox'>
            <div className='film'>{this.filtrer()}
                <div className='addbox' onClick={this.tabing}>+</div></div>
              {this.state.tab.map((e) => <div style={{ display: this.state.show ? 'none' : 'inline' }} className='modal'>
                <input type='text' placeholder='title' onChange={this.naming} />
                <input type='text' placeholder='rate:0-5' onChange={this.rating} />
                <input type='text' placeholder='film' onChange={this.img} />
                <button onClick={()=>((this.state.name)&&(this.state.rate)&&(this.state.link))?this.boxing(e.id):console.log()}>Add</button></div>)}
             
            
        
    



        </div>);
    }
}

export default Form;
//link:https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg:avenger
//link:https://media.senscritique.com/media/000017617001/325/Annihilation.jpg:annihilation
//link:http://fr.web.img2.acsta.net/c_215_290/pictures/19/11/06/15/39/4003815.jpg:black cristmas