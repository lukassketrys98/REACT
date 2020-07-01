import React, { Component } from "react"


class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({ data: data, loading: false }))
            
        }

    render() {
        const {data,loading} = this.state
        return (
            <div>
                {/* {this.props.children(this.state.loading, this.state.data)} */}
                {this.props.children({data,loading})}
            </div>
        )
    }
}

export default DataFetcher