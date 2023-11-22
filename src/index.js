async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // return import('lodash').then(({default: _}) => {
    //     const element = document.createElement('div');

    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      
    // }).catch((error) => 'An error occurred while loading the component')

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component)
})