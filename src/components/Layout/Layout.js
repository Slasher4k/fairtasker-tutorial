// ./components/Layout/Layout.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (<><AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" component={Link} to='/' >
                            Fairtasker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ padding: '8px' }}>                
                    {children}           
                </div>
            </>)
}
 
export default Layout;