import React, {Component} from 'react'
import Karusel from './Karusel'
import PageTitle from './PageTitle'

class Landing extends Component {
    render(){
        return (
          <div>
            <Karusel/>
            <PageTitle pageName="Выбор редакции"/>
            <PageTitle pageName="Рекомендации"/>
            </div>
        )
    }
}

export default Landing
