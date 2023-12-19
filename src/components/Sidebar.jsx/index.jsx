import { Home, ModeNight, Person, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
    <Box 
        flex={1}
        p={2}
        sx={{display: { xs: 'none', sm: 'block' }}}
    >
        <List>
            <ListItem>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <ModeNight />
                    </ListItemIcon>
                    <Switch />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

