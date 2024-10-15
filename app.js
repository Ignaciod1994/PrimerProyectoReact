function main () {
    return React.createElement ('h2', {}, 'hola mundo') 
    }
    
    const container = document.getElementById ('root');
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(app));