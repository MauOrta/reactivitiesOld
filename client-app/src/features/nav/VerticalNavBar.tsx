import React from 'react'
import { observer } from 'mobx-react-lite'
import { Menu, Container, Button } from 'semantic-ui-react'

const VerticalNavBar: React.FC = () => {
    return (
       
             <Menu fixed='left' pointing secondary vertical inverted>
                
                        <Menu.Item
                            name='home'
                        
                        />
                        <Menu.Item
                            name='messages'
                            
                        />
                        <Menu.Item
                            name='friends'
                            
                        />
                 
               
            </Menu>
       
    )
}

export default observer(VerticalNavBar);
