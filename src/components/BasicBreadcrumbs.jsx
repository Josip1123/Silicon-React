import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function BasicBreadcrumbs() {
    return (
        <div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/contact"
                >
                    Contact
                </Link>
            </Breadcrumbs>
        </div>
    );
}

export default BasicBreadcrumbs