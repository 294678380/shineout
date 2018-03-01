/**
 * cn - 自定义分隔符(字符串和reactNode)
 * en - separator(string and reactNode)
 */

import React, { Fragment } from 'react'
import { Breadcrumb } from 'shineout'

function Separator() {
  return <span>~</span>
}

const data = [{
  title: 'Home',
  url: '#',
}, {
  title: 'Self',
  url: 'https://www.baidu.com',
}]

export default function () {
  return (
    <Fragment>
      <Breadcrumb data={data} separator="|" />
      <Breadcrumb data={data} separator={<Separator />} />
    </Fragment>
  )
}
