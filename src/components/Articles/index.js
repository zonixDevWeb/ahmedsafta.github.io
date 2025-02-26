import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ArticleCard from '../Cards/ArticleCards'
import { articles } from '../../data/constants'


const Articles = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="articles">
      <Wrapper>
        <Title>Medium Articles</Title>
        <Desc>
        I have written and am currently writing articles on Medium about my experiences using different technologies and tools. 
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
        
          <Divider />
          {toggle === 'Openstack' ?
            <ToggleButton active value="Openstack" onClick={() => setToggle('Openstack')}></ToggleButton>
            :
            <ToggleButton value="Openstack" onClick={() => setToggle('Openstack')}>Openstack</ToggleButton>
          }
          {toggle === 'AWS' ?
            <ToggleButton active value="AWS" onClick={() => setToggle('AWS')}></ToggleButton>
            :
            <ToggleButton value="AWS" onClick={() => setToggle('AWS')}>AWS</ToggleButton>
          }
          <Divider />
          {toggle === 'CyberSecurity' ?
            <ToggleButton active value="CyberSecurity" onClick={() => setToggle('CyberSecurity')}>Cybersecurity</ToggleButton>
            :
            <ToggleButton value="Cybersecurity" onClick={() => setToggle('Cybersecurity')}>Cybersecurity</ToggleButton>
          }
        
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && articles
            .map((article) => (
              <ArticleCard article={article} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {articles
            .filter((item) => item.category == toggle)
            .map((article) => (
              <ArticleCard article={article} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Articles;