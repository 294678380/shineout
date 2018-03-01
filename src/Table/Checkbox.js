import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'

export default class extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.props.value.listen('change', this.handleUpdate)
  }

  componentWillUnmount() {
    this.props.value.unlisten('change', this.handleUpdate)
  }

  handleUpdate() {
    this.forceUpdate()
  }

  handleChange(_, checked, index) {
    const { data, value } = this.props
    if (checked) {
      value.addValue(data, index)
    } else {
      value.removeValue(data, index)
    }
  }

  render() {
    const { data, value } = this.props
    const checked = value.check(data)
    return (
      <Checkbox {...this.props} checked={checked} onChange={this.handleChange} />
    )
  }
}