import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
    const { logout,isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div style={{paddingTop:"9px"}}>
        <button onClick={()=>logout()} className="btn btn-outline-secondary btn-sm">Logout </button>
        </div>
        )
        
    );
}

export default Logout;