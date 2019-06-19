import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const card = {
  flexBasis: 'auto',
  height: '295px',
  width: '160px',
  margin: '5px',
  cursor: 'pointer',
  fontSize: '13px'
}

const img = {
  height: '180px',
  display: 'flex'
}

export default function CardSongs(props) {
  return (
    <Card style={card} onClick={props.clickCard}>
      <Image src={props.img} wrapped ui={false} style={img} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.artist}</span>
        </Card.Meta>
        <Card.Description>
          {props.artistUrl}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.name}
      </Card.Content>
    </Card>
  )
}
