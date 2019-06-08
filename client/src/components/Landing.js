import React, {Component} from 'react'
import Karusel from './Karusel'
import PageTitle from './PageTitle'
import DishList from './DishList'
import SpecialOffer from './SpecialOffer'

class Landing extends Component {
    render(){
        return (
          <div>
            <Karusel/>
            <PageTitle pageName="Выбор редакции"/>
            <div className="rec-producer">
            <SpecialOffer/>
            <div className="row bg-gray">
            <DishList aim='main1' limit="6"/>
            </div>
            </div>
            <PageTitle pageName="Рекомендации"/>
            <div className="row bg-gray rec-main2">
            <DishList aim='main2' limit="6"/>
            </div>
            </div>
        )
    }
}

export default Landing
