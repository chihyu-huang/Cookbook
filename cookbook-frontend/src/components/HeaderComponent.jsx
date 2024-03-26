import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "/recipes" className = "navbar-brand" >
                            Cookbook App
                        </a>
                        
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent