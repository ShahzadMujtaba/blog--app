import React, { Component } from 'react'

 class Blog extends Component {
    render() {
       console.log(this.props)
        return (
            <div className="container style-post">
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</p>
            </div>
        )
    }
}

export default Blog
