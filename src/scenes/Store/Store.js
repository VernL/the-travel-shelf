import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoreArticle from '../../components/StoreArticle/StoreArticle'
import Footer from '../../components/Footer/Footer'
import * as actionCreators from '../../store/actions/index'
import './Store.css'

class Store extends Component {

  componentDidMount() {
    let name = this.props.match.params.name
      this.props.selectStore(name)
  }

  render () {
    let content = null

    if (this.props.store) {
      content = (
        <StoreArticle {...this.props.store} />
      )
    }

    return (
      <div>
        {content}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    store: state.selectedStore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectStore: (name) => dispatch(actionCreators.selectStore(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
